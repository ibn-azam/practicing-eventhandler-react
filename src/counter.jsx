import { useState } from "react"

export default function Counter(){
    const [count,setCount] =useState(0);

    const handleAdd = ()=>{
        const newNum =count + 1;
        setCount(newNum);
    }
    return(
        <div className="done">
            <h2>Count : {count}</h2>
            <button className="btn" onClick={handleAdd}>Add</button>
        </div>
    )
}