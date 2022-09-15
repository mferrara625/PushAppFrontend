import {React, useEffect, useState} from 'react'
import BorderCard from '../common/BorderCard';
import Button from '../common/Button'
import Container from '../common/Container'

const Timer = (props) => {
    // initial value
    // start timer
    // pause timer
    // clear/reset timer
    const [activateReset, setActivateReset] = useState(props.activateReset);

    const [time, setTime ] = useState(0); 
    const[isActive, setIsActive] = useState(false);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        if(isActive){
        async function updateTime(){
        await delay(1000)
        setTime(time + 1);
        }
        updateTime();
        }
            console.log("SECOND TEST OF RESET FUNCTION")
            async function resetTimer(){
                if(props.activateReset){
            reset();
            await delay(1000)
            }
        }
            resetTimer();
            setActivateReset(false);
        }

    , [time, isActive, props.activateReset]);

    const start = () => {
        setIsActive(true);
    }

    const pause = () => {
        setIsActive(false);
    }

    const reset = async () => {
        setIsActive(false);
        await delay(1005);
        setTime(0);
        setIsActive(true);
    }
    

  return (
    <BorderCard style={{flexDirection: "column"}}>
        <div style={{textAlign: "center", justifyContent: "center"}}>
        <h1>{time}</h1>
        </div>
        <div>
    <Button onClick={start} >Start</Button>
    <Button onClick={pause} >Pause</Button>
    <Button onClick={reset}>Reset</Button>
        </div>

    </BorderCard>
  )
}

export default Timer