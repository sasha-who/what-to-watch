import * as React from "react";

interface Props {
  previewVideo: string;
  defaultImage: string;
  isPlaying: boolean;
}

class VideoPlayer extends React.PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    video.onpause = () => {
      video.load();
    };

    if (isPlaying) {
      video.play();
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.onpause = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }

  render() {
    const {previewVideo, defaultImage} = this.props;

    return (
      <video
        ref={this.videoRef}
        src={previewVideo}
        width={280}
        height={175}
        poster={defaultImage}
        muted
      />
    );
  }
}

export default VideoPlayer;
