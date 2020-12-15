import React from 'react';
import './developers.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Developers = () => (
  <div className="developers-page">
    <h3 className="developer-heading">Meet Our Team!</h3>
    
    <div className="developer-cards">

        <div className="developer-left">
            <div className="developer" style={{borderColor:"#008000"}}>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG1Ov5en3sEww/profile-displayphoto-shrink_200_200/0/1607128601046?e=1612396800&v=beta&t=inokVdcVTiPUe4DSDnUrZY_5-zQ-3N7vwJrW_oRzJ_g" alt="developer-Edmond-Hui"/>
                <div className="developer-info">
                    <label className="developer-label">Edmond Hui</label>
                    <p>Team Lead</p>
                    <div className="developer-links">
                        <a href="https://github.com/edmondthui/" className="personal-link github" target="_blank">
                            <FontAwesomeIcon icon={ faGithub }/>
                        </a>
                        <a href="https://www.linkedin.com/in/edmond-hui/" className="personal-link linkedin" target="_blank">
                            <FontAwesomeIcon icon={ faLinkedin }/>
                        </a>
                    </div>
                </div>
            </div>
                
            <div className="developer"style={{borderColor:"#424242"}}>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFU5FpvL6HXKw/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=QUb6n12umyfloeia8dHGfxamROE2ouK3QCG-kLQYNb8" alt="developer-Ray-Liang"/>
                <div className="developer-info">
                    <label className="developer-label">Ray Liang</label>
                    <p>Flex Developer</p>
                    <div className="developer-links">
                        <a href="https://github.com/bigcachemoney" className="github" target="_blank">
                        <FontAwesomeIcon icon={ faGithub }/>
                        </a>
                        <a href="https://www.linkedin.com/in/raylanliang/" className="linkedin" target="_blank">
                        <FontAwesomeIcon icon={ faLinkedin }/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="developer-right">
            <div className="developer" style={{borderColor:"#ff8f1f"}}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQERwWlNzQ2T0Q/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=PCD58ecm8a0Ax2xZhK0c-XSekSO60uGtbNRhRtey0ww" alt="developer-Alexandria-Wong"/>
                <div className="developer-info">
                    <label className="developer-label">Alexandria Wong</label>
                    <p>Frontend Lead</p>
                    <div className="developer-links">
                        <a href="https://github.com/alexawhy" className="personal-link github" target="_blank">
                        <FontAwesomeIcon icon={ faGithub }/>
                        </a>
                        <a href="https://www.linkedin.com/in/alexandria-hy-wong/" className="personal-link linkedin" target="_blank">
                        <FontAwesomeIcon icon={ faLinkedin }/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="developer" style={{borderColor: "pink"}}>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQE7fYPkDC_sSg/profile-displayphoto-shrink_200_200/0/1516497851265?e=1612396800&v=beta&t=z9PfpTCyjDISBEY9zYemwrFCj1gzCx0JXAessA64iOA" alt="developer-Jasmine-Lok"/>
                <div className="developer-info">
                    <label className="developer-label">Jasmine Lok</label>
                    <p>Backend Lead</p>
                    <div className="developer-links">
                        <a href="https://github.com/jasminellok" className="personal-link github" target="_blank">
                        <FontAwesomeIcon icon={ faGithub }/>
                        </a>
                        <a href="https://www.linkedin.com/in/jasminellok/" className="personal-link linkedin" target="_blank">
                        <FontAwesomeIcon icon={ faLinkedin }/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  </div>
)

export default Developers;