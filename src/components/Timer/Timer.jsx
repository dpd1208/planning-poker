import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { TimerWrapper, Button } from './Timer.styled';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(null);
 
 useEffect(() => {
     if(timeLeft===0){
        setTimeLeft(null)
     }
 
     // exit early when we reach 0
     if (!timeLeft) return;
 
     // save intervalId to clear the interval when the
     // component re-renders
     const intervalId = setInterval(() => {
 
       setTimeLeft(timeLeft - 1);
     }, 1000);
 
     // clear interval on re-render to avoid memory leaks
     return () => clearInterval(intervalId);
     // add timeLeft as a dependency to re-rerun the effect
     // when we update it
   }, [timeLeft]);
 
 return (
   <TimerWrapper>
     {timeLeft}
     <Button onClick={()=>setTimeLeft(5)}>
             Start Timer
     </Button>
   </TimerWrapper>
  )
 }

 Timer.propTypes = {
    className: PropTypes.string
  };
  
  Timer.defaultProps = {
    className: null,
  };
  
  export default Timer;