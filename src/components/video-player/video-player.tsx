import * as React from "react";

interface Props {
  previewVideo: string;
  defaultImage: string;
  isPlaying: boolean;
}

class VideoPlayer extends React.PureComponent<Props, null> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount(): void {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    video.onpause = () => {
      video.load();
    };

    if (isPlaying) {
      video.play();
    }
  }

  componentWillUnmount(): void {
    const video = this.videoRef.current;

    video.onpause = null;
    video.src = ``;
  }

  componentDidUpdate(): void {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }

  render(): React.ReactNode {
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
