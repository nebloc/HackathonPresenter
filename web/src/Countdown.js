import React, { Component } from 'react';
import './Countdown.css'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
    };
    this.millToHourMinSec = this.millToHourMinSec.bind(this);
  }

  countdown() {
    let currentTime = Date.now();
    let diffMillSeconds = Math.abs(this.props.endTime - currentTime);

    let time = this.millToHourMinSec(diffMillSeconds);

    this.setState(time);
  }

  millToHourMinSec(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return {
      hours: hrs,
      minutes: mins,
      seconds: secs
    };
  }

  componentDidMount() {
    this.countdown();
    this.setState({ timer: setInterval(this.countdown.bind(this), 1000) })
  }


  render() {
    return (
      <span className="countdown">
        {this.state.hours}:{("0" + this.state.minutes).slice(-2)}:{("0" + this.state.seconds).slice(-2)}
      </span>
    );
  }
}

export default Countdown;