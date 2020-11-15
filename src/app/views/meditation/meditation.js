import React, { useState, useEffect, Component, useRef } from "react";
import "./meditation.scss";
import ReactDOM from 'react-dom';


import axios from "axios"

import { UserCard } from "app/components";
import { render } from "@testing-library/react";


function Meditation() {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(60);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
          }
        }, 1000);
      } else if (!isActive && seconds === 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

  return (  
    <div className="user-list">
      <h1>Meditation Page</h1>
      <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
    </div>
  )
}

export default Meditation;
