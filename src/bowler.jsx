import { useState } from "react"
import './App.css'

export default function Bowler(){
    const [balls,setBalls] = useState(6);
    const [noBalls,setNoballs] = useState(0);
    const [wideBalls,setWideballs] = useState(0);
    const [extras,setExtras] = useState(0);
    const [wideExtras,setWideExtras] = useState(0);
    
    const Balls = ()=>{
        if(balls > 0){
            const upgradeBalls = balls - 1;
            setBalls(upgradeBalls);
        }
    }
    const NoBall = ()=>{
        const remainNoballs = noBalls - 0;
        const addNoball = extras + 1;
        setNoballs(remainNoballs);
        setExtras(addNoball);

    }
    const WideBall = ()=>{
        const remainWideballs = wideBalls - 0;
        const addWideballs = wideExtras + 1;
        setWideballs(remainWideballs);
        setWideExtras(addWideballs);

    }
    return(
        <div className="bowler">
            <h2>Bangladesh</h2>
            {
                balls === 0 && <p><small>Over Completed</small></p>
            }
            {
                extras === 3 && <p><small>You Are Banned</small></p>
            }
            <h1>Over : {balls}</h1>
            <p><small>WideBall : {wideExtras}</small></p>
            <p><small>NoBall : {extras}</small></p>
            <button className="btn" onClick={Balls}>Ball Count</button>
            <button className="btn" onClick={NoBall}>No Ball</button>
            <button className="btn" onClick={WideBall}>Wide Ball</button>
        </div>
    )
}