import React, { Component } from 'react'
import moment from 'moment'
import './Time.css'
import { Card } from 'react-bootstrap'

export default class Time extends Component {
  constructor() {
    super();

    var entryDate = localStorage.getItem('entryDate')

    this.state = {
      startDate: entryDate,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  callMe() {
    setInterval(() => {
      var newToday = moment(new Date());
      var diff = newToday.diff(this.state.startDate)
      var diffDuration = moment.duration(diff)
      var newHours = diffDuration.hours()
      var newMin = diffDuration.minutes()
      var newSec = diffDuration.seconds()
      this.setState({ hours: newHours, minutes: newMin, seconds: newSec })
    }, 1000)
  }

  render() {
    return (
      <div>
        <Card className="frame_timer">
          <Card.Body style={{ width: "100%" }}>
            <p className="title">Timer</p>
            <p className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
            {this.callMe()}
          </Card.Body>
        </Card>
      </div>
    );
  }
}