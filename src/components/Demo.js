import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo=()=>{
    const [text,setText]=useState(0);
    const [isDarkTheme,setIsDarkTheme]=useState(false);

    const prime=useMemo(()=>findPrime(text),[text]);

    return(
    <div 
        className={
        "m-2 p-2 w-80 h-58 border border-black " + 
        (isDarkTheme && "bg-gray-900 text-white")
        }
        >
        <div>
        <button className="bg-green-300 m-2 p-2" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <div>
        <input type="text" value={text} className="m-2 p-2 border border-black text-black" onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
        <h1 className="m-1 p-2 font-bold">nth Prime Number:{prime}</h1>
        </div>
    </div>)
}

export default Demo;