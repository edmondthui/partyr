import React from 'react';
import './developers.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Developers = () => (
  <div className="developers-page">
    <h3 className="developer-heading">Meet Our Team!!</h3>

    <div className="developer-cards">
        <div className="developer" style={{borderColor:"#008000"}}>
            <label className="developer-label">Edmond Hui</label>
            <p>Team Lead</p>
            <div className="developer-links">
                <a href="https://github.com/edmondthui/" className="personal-link">
                    <FontAwesomeIcon icon={ faGithub }/>
                </a>
                <a href="https://www.linkedin.com/in/edmond-hui/" className="personal-link">
                    <FontAwesomeIcon icon={ faLinkedin }/>
                </a>
            </div>
        </div>
            
        <div className="developer"style={{borderColor:"#424242"}}>
            <label className="developer-label">Ray Liang</label>
            <p>Flex Developer</p>
            <div className="developer-links">
                <a href="https://github.com/bigcachemoney" className="personal-link">
                <FontAwesomeIcon icon={ faGithub }/>
                </a>
                <a href="https://www.linkedin.com/in/raylanliang/" className="personal-link">
                <FontAwesomeIcon icon={ faLinkedin }/>
                </a>
            </div>
        </div>

        <div className="developer" style={{borderColor:"#ff8f1f"}}>
            <label className="developer-label">Alexandria Wong</label>
            <p>Frontend Lead</p>
            <div className="developer-links">
                <a href="https://github.com/alexawhy" className="personal-link">
                <FontAwesomeIcon icon={ faGithub }/>
                </a>
                <a href="https://www.linkedin.com/in/alexandria-hy-wong/" className="personal-link">
                <FontAwesomeIcon icon={ faLinkedin }/>
                </a>
            </div>
        </div>

        <div className="developer" style={{borderColor: "pink"}}>
            <label className="developer-label">Jasmine Lok</label>
            <p>Backend Lead</p>
            <div className="developer-links">
                <a href="https://github.com/jasminellok" className="personal-link">
                <FontAwesomeIcon icon={ faGithub }/>
                </a>
                <a href="https://www.linkedin.com/in/jasminellok/" className="personal-link">
                <FontAwesomeIcon icon={ faLinkedin }/>
                </a>
            </div>
        </div>

    </div>
  </div>
)

export default Developers;