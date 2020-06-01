import React, { useState } from 'react'

export const ClickToShow = ({ title, children }) => {
  const [show, setShow] = useState(false)

  const toggleChildren = () => {
    setShow(!show)
  }

  return !show ? (
    <button onClick={toggleChildren} className="show-button">
      {title}
    </button>
  ) : (
    <div onDoubleClick={toggleChildren}>{children}</div>
  )
}
