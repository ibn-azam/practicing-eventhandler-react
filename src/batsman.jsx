import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns]= useState(0);
    const [sixes,setSixes] = useState(0);
    const [fours,setFours] = useState(0);
    const [singles,setSingle] = useState(0);

    const single = ()=>{
        const newSingle = runs + 1;
        const upgradeSingle = singles + 1;
        setSingle(upgradeSingle);
        setRuns(newSingle);
    }
    const four = ()=>{
        const addFour = runs + 4;
        const upgradeFour = fours + 1;
        setFours(upgradeFour);
        setRuns(addFour);
    }
    const six = ()=>{
        const addSix = runs + 6;
        const upgradeSix = sixes + 1;
        setSixes(upgradeSix);
        setRuns(addSix);
    }
    return(
        <div className="batsman">
            {
                runs > 49 && <h2>Congo You Got 50</h2>
            }
            {
                runs > 99 && <h2>Congo You Got 100</h2>
            }
            <h2>Bangladesh</h2>
            <p><small>Six :{sixes}</small></p>
            <p><small>Four :{fours}</small></p>
            <p><small>Single :{singles}</small></p>
            <h1>Score : {runs}</h1>
            <button className="btn" onClick={single}>Single</button>
            <button className="btn" onClick={four}>Four</button>
            <button className="btn" onClick={six}>Six</button>
        </div>
    )
}