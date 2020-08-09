import * as React from "react";
import {Subtract} from "utility-types";
import {PREVIEW_DELAY} from "../../const";

interface State {
  isPlaying: boolean;
  currentTimer: number;
}

interface InjectingProps {
  isPlaying: boolean;
  onStartPlaying: () => void;
  onStopPlaying: () => void;
  onHoverChange: () => void;
}

const withFilmCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFilmCard extends React.PureComponent<T, State> {
    private mounted: boolean;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        currentTimer: null
      };

      this.handleStartPlaying = this.handleStartPlaying.bind(this);
      this.handleStopPlaying = this.handleStopPlaying.bind(this);
      this.handleHoverChange = this.handleHoverChange.bind(this);

      this.mounted = false;
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    handleStartPlaying() {
      const timerId = window.setTimeout(() => {
        if (this.mounted) {
          this.setState({
            isPlaying: true
          });
        }
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
  }

  return WithFilmCard;
};

export default withFilmCard;
