import React from "react";

class ClockDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <span>
          {this.props.isPrecise
            ? this.state.date.toISOString()
            : this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100; // cada cùanto variara el date.
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default ClockDidUpdate;
