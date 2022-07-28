import React from 'react';
import './Activity.css';
import { Card } from 'react-bootstrap';
import avatar from './../../img/avatar.png';
import github from './../../img/github.png';
import tg from './../../img/tg.png';

export default function PageActivity() {
  return (
    <div className="main" id="main">
      <Card className="skills_card" id="skills_card">
        <Card.Body>
          <Card.Title className="my_skills_title">My skills</Card.Title>
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

      <Card className="profile_card" id="profile_card">
        <Card.Body>
          <img src={avatar} className="avatar" alt="Avatar" />
          <div className="name_job_div">
            <Card.Text className="name">Dmitriy Shustov</Card.Text>
            <Card.Text className="job">Web developer</Card.Text>
          </div>
          <div className="contacts">
            <a href="https://t.me/dimisho">
              <img src={tg} className="logo_contact" alt="tg" />
            </a>
            <a href="https://github.com/Shust0vD">
              <img src={github} className="logo_contact" alt="gh" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
