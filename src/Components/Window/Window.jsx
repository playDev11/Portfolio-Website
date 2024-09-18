import React, { useState } from 'react'
import { Rnd } from 'react-rnd' // Draggable and resizable
import './window.css'

const Window = ({ title, onClose, children }) => {
  const [zIndex, setZIndex] = useState(10) // Set a zIndex for each window so they don't overlap

  const bringToFront = () => {
    setZIndex(zIndex + 10) // Bring the window to the front
  }

  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 600,
        height: 400,
      }}
      minWidth={400}
      minHeight={300}
      bounds="parent"
      onMouseDown={bringToFront}
      style={{ zIndex }}
      className="window"
    >
      <div className="window-header">
        <div className="window-controls">
          <button className="window-close" onClick={onClose}></button>
          <button className="window-minimize"></button>
          <button className="window-maximize"></button>
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">{children}</div>  
    </Rnd>
  )
}

export default Window
