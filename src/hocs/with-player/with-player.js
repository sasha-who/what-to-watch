import * as React from "react";
import PropTypes from "prop-types";
import {VIDEO_CLASS_NAME} from "../../const.js";
import {getFilmFromParameters} from "../../utils/common.js";

const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        progress: 0
      };

      this._videoRef = React.createRef();
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      const film = getFilmFromParameters(this.props.films, this.props.match.params.id);
      const {cover, videoLink} = film;
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      video.className = VIDEO_CLASS_NAME;
      video.poster = cover;
      video.src = videoLink;

      video.onplay = () => this.setState({
        isPlaying: true
      });

      video.onpause = () => this.setState({
        isPlaying: false
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });

      if (isPlaying) {
        video.play();
      }
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onplay = null;
      video.onpause = null;
      video.className = ``;
      video.poster = ``;
      video.src = ``;
    }

    handlePlayButtonClick() {
      this.setState((state) => ({
        isPlaying: !state.isPlaying
      }));
    }

    handleFullScreenButtonClick() {
      const video = this._videoRef.current;

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
          progress={this.state.progress}
          onPlayButtonClick={this.handlePlayButtonClick}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
        >
          <video ref={this._videoRef} />
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          cover: PropTypes.string.isRequired,
          poster: PropTypes.string.isRequired,
          previewVideo: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
          release: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          ratingsCount: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          director: PropTypes.string.isRequired,
          actors: PropTypes.arrayOf(PropTypes.string),
          previewImage: PropTypes.string.isRequired,
          backgroundColor: PropTypes.string.isRequired,
          videoLink: PropTypes.string.isRequired,
          isFavorite: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    match: PropTypes.object.isRequired
  };

  return WithPlayer;
};

export default withPlayer;


