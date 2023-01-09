import { useRef, useState } from "react";

const TIMER_STATE = {
    STARTED : "STARTED",
    STOPED : "STOPPED"
}

export default function Hello(){

    console.log("clalled");

    const [timer, setTimer] = useState(25);


    let timerRef = useRef();

    function start(){
        if(!timerRef.current){
            timerRef.current = setInterval(function(){
                setTimer(timer => timer - 1);
            }, 1000);
            timerRef.state = TIMER_STATE.STARTED;
            console.log(timerRef);
        }
    }

    function stop(){
        clearInterval(timerRef.current);
        timerRef.current = null;
        console.log("timer cleared")
    }



    return (
        <div>
            <span className={"timer " + timerRef.state}> {timer}</span>
            <button onClick={start} className="start">Start </button>
            <button onClick={stop} className="stop">Stop </button>
        </div>        
    );
}