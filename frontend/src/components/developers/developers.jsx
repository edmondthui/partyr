import React from "react";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Developers = () => (
  <div className="developers-page">
    <h3 className="developer-heading">Meet Our Team!</h3>

    <div className="developer-cards">
      <div className="developer-left">
        <div className="developer" style={{ borderColor: "#008000" }}>
          <img
            src="https://avatars.githubusercontent.com/u/63014983?s=460&u=35d321b345ad718ba8d83b16be372e30924cd64e&v=4"
            alt="developer-Edmond-Hui"
          />
          <div className="developer-info">
            <label className="developer-label">Edmond Hui</label>
            <p>Team Lead</p>
            <div className="developer-links">
              <a
                href="https://github.com/edmondthui/"
                className="personal-link github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/edmond-hui/"
                className="personal-link linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://angel.co/u/edmondthui"
                className="personal-link angellist"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAngellist} />
              </a>
              <a
                href="https://edmondhui.com/"
                className="personal-link portfolio"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </div>
          </div>
        </div>
        <div className="developer" style={{ borderColor: "#424242" }}>
          <img
            src="https://imgur.com/a/imz0Gze"
            alt="developer-Ray-Liang"
          />
          <div className="developer-info">
            <label className="developer-label">Ray Liang</label>
            <p>Flex Developer</p>
            <div className="developer-links">
              <a
                href="https://github.com/bigcachemoney"
                className="personal-link github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/raylanliang/"
                className="personal-link linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://angel.co/u/raylan-liang"
                className="personal-link angellist"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAngellist} />
              </a>
              <a
                href="http://raylanliang.com/"
                className="personal-link portfolio"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="developer-right">
        <div className="developer" style={{ borderColor: "#ff8f1f" }}>
          <img
            src="https://alexandria-wong.com/images/alexandria_wong.jpg"
            alt="developer-Alexandria-Wong"
          />
          <div className="developer-info">
            <label className="developer-label">Alexandria Wong</label>
            <p>Frontend Lead</p>
            <div className="developer-links">
              <a
                href="https://github.com/alexawhy"
                className="personal-link github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandria-hy-wong/"
                className="personal-link linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://angel.co/u/alexandria-wong"
                className="personal-link angellist"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAngellist} />
              </a>
              <a
                href="https://alexandria-wong.com/"
                className="personal-link portfolio"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </div>
          </div>
        </div>

        <div className="developer" style={{ borderColor: "pink" }}>
          <img
            src="https://jasminellok.github.io/img/about.png"
            alt="developer-Jasmine-Lok"
          />
          <div className="developer-info">
            <label className="developer-label">Jasmine Lok</label>
            <p>Backend Lead</p>
            <div className="developer-links">
              <a
                href="https://github.com/jasminellok"
                className="personal-link github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/jasminellok/"
                className="personal-link linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://angel.co/u/jasminellok"
                className="personal-link angellist"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAngellist} />
              </a>
              <a
                href="https://jasminellok.github.io/"
                className="personal-link portfolio"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Developers;
