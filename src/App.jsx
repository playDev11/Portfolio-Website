import React, { useState } from 'react'
import './App.css'
import Window from './Components/Window/Window'
import Taskbar from './Components/Taskbar/Taskbar'
import About from './Pages/About/About'
import Projects from './Pages/Project/Project'
import Resume from './Pages/Resume/Resume'
import ReadMe from './Pages/Readme/Readme'

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (windowName) => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName]);
    }
  };

  const closeWindow = (windowName) => {
    setOpenWindows(openWindows.filter((w) => w !== windowName));
  };

  return (
    <div className="desktop">
      <Taskbar openWindow={openWindow} />

      {openWindows.includes('about') && (
        <Window title="About Me" onClose={() => closeWindow('about')}>
          <About />
        </Window>
      )}
      {openWindows.includes('projects') && (
        <Window title="Projects" onClose={() => closeWindow('projects')}>
          <Projects/>
        </Window>
      )}
      {openWindows.includes('resume') && (
        <Window title="Resume" onClose={() => closeWindow('resume')}>
          <Resume/>
        </Window>
      )}
      {openWindows.includes('readme') && (
        <Window title="Readme.txt" onClose={() => closeWindow('readme')}>
          <ReadMe/>
        </Window>
      )}
    </div>
  );
};

export default App
