import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Time.css';
import { Card } from 'react-bootstrap';

export default function PageTime() {
  const entryDate = localStorage.getItem('entryDate');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let newDate = moment(new Date());
      let diff = newDate.diff(entryDate);
      let diffDuration = moment.duration(diff);
      setHours(diffDuration.hours());
      setMinutes(diffDuration.minutes());
      setSeconds(diffDuration.seconds());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Card className="frame_timer">
        <Card.Body style={{ width: '100%' }}>
          <p className="title">Timer</p>
          <p className="time">
            {hours}:{minutes}:{seconds}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
