import React from 'react'
import { useState } from 'react';

function Event() {

  const [message, setMessage] = useState("Hello!");

    function changebg() {
    document.body.style.backgroundColor = "blue";
    setMessage("Background Changed!");
  }


  return (
    <div>
    <div>{message}</div>
      <button onClick={changebg}>Click</button>
    </div>
  )
}

export default Event
