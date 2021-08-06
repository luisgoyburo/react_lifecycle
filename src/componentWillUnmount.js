import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <span>
          En este div se muestra la hora actual, utilizando 'componentDidMount'
        </span>
        <br></br>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default Clock;
