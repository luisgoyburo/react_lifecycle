import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div id="clock">
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
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}

export default Clock;
