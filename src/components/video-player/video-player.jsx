import React from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    // const video = this._videoRef.current;
  }

  render() {
    const {preview, defaultImage} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={preview}
        width={280}
        height={175}
        poster={defaultImage}
        muted
      />
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired
};
