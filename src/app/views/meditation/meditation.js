import React, { useState, useEffect, Component, useRef } from "react";
import "./meditation.scss";
import ReactDOM from 'react-dom';



import axios from "axios"

import { UserCard } from "app/components";
import { render } from "@testing-library/react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};


function Meditation() {
    const [playing, toggle] = useAudio('/AudioMed.mp3');
    const [seconds, setSeconds] = useState(60);
    var audio = new Audio('/AudioMed.mp3');
    audio.volume = 0.2;

    function reset() {
      setSeconds(60);
    }
  
    useEffect(() => {
      let interval = null;
      if (playing) {
        interval = setInterval(() => {
          if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
          }
        }, 1000);
      } else if (!playing && seconds === 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [playing, seconds]);
    // const soundUrl = '/sounds/guitar-loop.mp3';

  return (  
    <div className="user-list">
      <h1>Meditation Page</h1>
      <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${playing ? 'active' : 'inactive'}`} onClick={toggle}>
          {playing ? 'Pause' : 'Start'}
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
