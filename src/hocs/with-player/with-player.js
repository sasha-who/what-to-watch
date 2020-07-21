import React from "react";
import PropTypes from "prop-types";
import {VIDEO_CLASS_NAME} from "../../const.js";

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
      const {isPlaying} = this.state;
      const {poster, preview} = this.props.film;
      const video = this._videoRef.current;

      video.className = VIDEO_CLASS_NAME;
      video.poster = poster;
      video.src = preview;

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
      return (
        <Component
          {...this.props}
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
    film: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      ratingsCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string),
      runTime: PropTypes.number.isRequired,
      reviews: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            userName: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired
          })
      ).isRequired
    })
  };

  return WithPlayer;
};

export default withPlayer;


