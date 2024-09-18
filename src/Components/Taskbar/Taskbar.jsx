import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faProjectDiagram,
  faBriefcase,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './taskbar.css'

const Taskbar = ({ openWindow }) => {
  return (
    <div className="taskbar">
      <div className="taskbar-icon" onClick={() => openWindow('about')}>
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div className="taskbar-icon" onClick={() => openWindow('projects')}>
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faProjectDiagram} />
        </div>
      </div>

      <div className="taskbar-icon" onClick={() => openWindow('resume')}>
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
      </div>
      <div className="taskbar-icon" onClick={() => openWindow('readme')}>
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faBook} />
        </div>
      </div>

      <div
        className="taskbar-icon"
        onClick={() => window.open('https://github.com/yourusername', '_blank')}
      >
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>

      <div
        className="taskbar-icon"
        onClick={() =>
          window.open('https://linkedin.com/in/yourusername', '_blank')
        }
      >
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>

      <div
        className="taskbar-icon"
        onClick={() => window.open('mailto:yourmail@example.com')}
      >
        <div className="taskbar-icon-background">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Taskbar
