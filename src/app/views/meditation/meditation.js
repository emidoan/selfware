import React, { useState, useEffect, Component, useRef } from "react";
import "./meditation.scss";
import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";


import axios from "axios"

import { UserCard } from "app/components";
import { render } from "@testing-library/react";


const renderTime = ({ remainingTime }) => {
   if (remainingTime === 0) {
    
    return <div className="timer">Done Meditating</div>;
  } 


  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
      <div className="text">remaining</div>
    </div>
  );
};


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
    const [playing, toggle] = useAudio('/chillBeat.mp3');
    const [seconds, setSeconds] = useState(60);
    var audio = new Audio('/chillBeat.mp3');
    
    function reset() {
      setSeconds(60);
      seconds = 0;
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

  return (  
    <div className="user-list">
      <h1>Meditation Page</h1>
      <h1>

      </h1>
      <h3>
      The 4-7-8 breathing technique (inhale for 4 seconds, 
      hold for 7, exhale for 8 )
      helps promote relaxation, 
      even from doing it for just one minute. 
      Go ahead an use this 60 second timer to have 
      a quick minute of relaxation to 
      reset yourself. The timer loops on, 
      so take however many minute you'd like!
      </h3>
      <p>

      </p>
      <div className="app">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[["#36c982", 0.33], ["#49d52a", 0.33], ["#f7cb08", 0.33], ["#ff9100", 0.33], ["#e47f1b", 0.33]]}
          onComplete={() => [true, 3000]}
          
        >
          {(remainingTime) => renderTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <p>
      </p>
      <div className="row">
        <button className={`button button-primary button-primary-${playing ? 'active' : 'inactive'}`} onClick={toggle}>
          {playing ? 'Pause' : 'Play Music'}
        </button>
        <h4>
        Feel free to add some music to your experience!
        </h4>
      </div>
    </div>
    </div>
  )
}

export default Meditation;
