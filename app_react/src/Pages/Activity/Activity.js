import React, { Component } from 'react'
import './Activity.css'
import { Card } from 'react-bootstrap'
import avatar from './../../img/avatar.png'
import github from './../../img/github.png'
import tg from './../../img/tg.png'

export default class Hello extends Component {
  render() {
    return (
      <div className='cards'>
        <Card className="frame_16">
          <Card.Body>
            <Card.Title className="my_skills">My skills</Card.Title>
            <Card.Text className="skill_name">Python, PostgreSQL, PHP</Card.Text>
            <div className="containerX">
              <div className="skills python">70%</div>
            </div>
            <Card.Text className="skill_name">HTML, CSS, C#</Card.Text>
            <div className="containerX">
              <div className="skills html">60%</div>
            </div>
            <Card.Text className="skill_name">JavaScript, Git</Card.Text>
            <div className="containerX">
              <div className="skills js">50%</div>
            </div>
            <Card.Text className="skill_name">Node.js</Card.Text>
            <div className="containerX">
              <div className="skills node">20%</div>
            </div>
          </Card.Body>
        </Card>

        <Card className="frame_20">
          <Card.Body>
          <img  src={avatar} className="avatar" alt="Avatar"/>
          <div className="frame_18">
          <Card.Text className="my_name">Dmitriy Shustov</Card.Text>
          <Card.Text className="developer">Web developer</Card.Text>
          </div>
          <div className="frame_19">
            <a href="https://t.me/dimisho"><img src={tg} className="social" alt="tg" /></a>
            <a href="https://github.com/Shust0vD"><img src={github} className="social" alt="gh" /></a>
          </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
