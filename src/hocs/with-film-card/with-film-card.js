import React from "react";
import {PREVIEW_DELAY} from "../../const.js";

const withFilmCard = (Component) => {
  class WithFilmCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        currentTimer: null
      };

      this.handleStartPlaying = this.handleStartPlaying.bind(this);
      this.handleStopPlaying = this.handleStopPlaying.bind(this);
      this.handleHoverChange = this.handleHoverChange.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onStartPlaying={this.handleStartPlaying}
          onStopPlaying={this.handleStopPlaying}
          onHoverChange={this.handleHoverChange}
        />
      );
    }

    handleStartPlaying() {
      const timerId = setTimeout(() => {
        this.setState({
          isPlaying: true
        });
      }, PREVIEW_DELAY);

      this.setState({
        currentTimer: timerId
      });
    }

    handleStopPlaying() {
      this.setState({
        isPlaying: false
      });
    }

    handleHoverChange() {
      clearTimeout(this.state.currentTimer);
    }
  }

  return WithFilmCard;
};

export default withFilmCard;
