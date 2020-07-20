import React from "react";

const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true
      };

      this._videoRef = React.createRef();
    }

    componentDidMount() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      video.onpause = () => {
        video.load();
      };

      if (isPlaying) {
        video.play();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onpause = null;
      video.src = ``;
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          ref={this._videoRef}
          isPlaying={this.state.isPlaying}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;


