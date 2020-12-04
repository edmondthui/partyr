import React from 'react';
import './developers.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Developers = () => (
  <div className="developers-page">
    <div className="developer">
      <label>Edmond Hui</label>
      <p>DESCRIPTION</p>
      <a href="https://github.com/edmondthui/" className="personal-link">
        <FontAwesomeIcon icon={ faGithub }/>
      </a>
      <a href="https://www.linkedin.com/in/edmond-hui/" className="personal-link">
        <FontAwesomeIcon icon={ faLinkedin }/>
      </a>
    </div>
        
    <div className="developer">
      <label>Ray Liang</label>
      <p>DESCRIPTION</p>
        <a href="https://github.com/bigcachemoney" className="personal-link">
          <FontAwesomeIcon icon={ faGithub }/>
        </a>
        <a href="https://www.linkedin.com/in/raylanliang/" className="personal-link">
          <FontAwesomeIcon icon={ faLinkedin }/>
        </a>
    </div>

    <div className="developer">
        <label>Alexandria Wong</label>
        <p>DESCRIPTION</p>
        <a href="https://github.com/alexawhy" className="personal-link">
          <FontAwesomeIcon icon={ faGithub }/>
        </a>
        <a href="https://www.linkedin.com/in/alexandria-hy-wong/" className="personal-link">
          <FontAwesomeIcon icon={ faLinkedin }/>
        </a>
    </div>

    <div className="developer">
        <label>Jasmine Lok</label>
        <p>DESCRIPTION</p>
        <a href="https://github.com/jasminellok" className="personal-link">
        <FontAwesomeIcon icon={ faGithub }/>
        </a>
        <a href="https://www.linkedin.com/in/jasminellok/" className="personal-link">
        <FontAwesomeIcon icon={ faLinkedin }/>
        </a>
    </div>
  </div>
)

export default Developers;