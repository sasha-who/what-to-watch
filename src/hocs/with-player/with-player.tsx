import * as React from "react";
import {RouteComponentProps} from "react-router-dom";
import {Subtract} from "utility-types";
import {VIDEO_CLASS_NAME} from "../../const";
import {getFilmFromParameters} from "../../utils/common";
import {Film} from "../../types";

interface State {
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
}

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams>{
  films: Film[];
}

interface InjectingProps {
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  film: Film;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
}

const withPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithPlayer extends React.PureComponent<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private isMounted: boolean;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        isLoading: true,
        progress: 0
      };

      this.videoRef = React.createRef();
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);

      this.isMounted = false;
    }

    componentDidMount() {
      this.isMounted = true;

      const film = getFilmFromParameters(this.props.films, this.props.match.params.id);
      const {cover, videoLink} = film;
      const {isPlaying} = this.state;
      const video = this.videoRef.current;

      video.className = VIDEO_CLASS_NAME;
      video.poster = cover;
      video.src = videoLink;

      video.oncanplaythrough = () => this.setState({
        isLoading: false
      });

      video.onplay = () => this.setState({
        isPlaying: true
      });

      video.onpause = () => this.setState({
        isPlaying: false
      });

      video.ontimeupdate = () => {
        if (this.isMounted) {
          this.setState({
            progress: Math.floor(video.currentTime),
          });
        }
      };

      const playPromise = video.play();

      if (playPromise !== undefined && isPlaying) {
        playPromise.then(() => {})
        .catch(() => {});
      }
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this.videoRef.current;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (isPlaying === false) {
            video.pause();
          }
        })
        .catch(() => {});
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.className = ``;
      video.poster = ``;
      video.src = ``;

      this.isMounted = false;
    }

    handlePlayButtonClick() {
      this.setState((state) => ({
        isPlaying: !state.isPlaying
      }));
    }

    handleFullScreenButtonClick() {
      const video = this.videoRef.current;

      if (!document.fullscreenElement) {
        video.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }

    render() {
      const film = getFilmFromParameters(this.props.films, this.props.match.params.id);

      return (
        <Component
          {...this.props}
          film={film}
          isPlaying={this.state.isPlaying}
          isLoading={this.state.isLoading}
          progress={this.state.progress}
          onPlayButtonClick={this.handlePlayButtonClick}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
        >
          <video ref={this.videoRef} />
        </Component>
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
