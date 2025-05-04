import { useState,useRef, useEffect } from "react";

const Demo1=()=>{
 let x=0;
 const i=useRef(null);
 const [yValue,setYValue]=useState(0);
 const ref=useRef(0);
 useEffect(()=>{
    if(i.current!=null) return;
    i.current =setInterval(()=>{
        console.log("Hello "+Math.random());
   },1000);
   return()=>clearInterval(i.current);
},[])
    return(
        <div className="border border-black m-2 p-2 w-80 h-58">
            <div>
               <button className="bg-green-300 m-2 p-2" onClick={
                ()=>{
                    x=x+1
                    console.log("x :"+x);
                    }}>Increase X</button>
               <div>
                <span className="m-20 px-10">Let = {x}</span>
               </div>
            </div>
            <div>
                <button className="bg-green-300 m-2 p-2" onClick={
                    ()=>{
                        setYValue(yValue+1);
                        console.log("y :"+yValue);
                    }}>Increase Y</button>
                <div>
                 <span className="m-20 px-8">State = {yValue}</span>
                </div>
            </div>
            <div>
                <button className="bg-green-300 m-2 p-2" onClick={
                ()=>{
                    ref.current=ref.current+1;
                    console.log("ref :"+ref.current);
                }}>Increase Z</button>
                <div>
                 <span className="m-20 px-10">Ref = {ref.current}</span>
                </div>
                <button className="bg-red-600 text-white rounded-lg m-6 p-4" onClick={()=>{clearInterval(i.current)}}>Stop Printing</button>
            </div>
        </div>
    )
}

export default Demo1;