import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store)=>store.chat.messages)
  const [liveChatMessage,setLiveChatMessage]=useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API polling");
      dispatch(addMessages({
         name: generateRandomName(),
         message: makeRandomMessage(10) + " 🚀",
      }
      ))
       
    }, 2000);
    return () => clearInterval(i);
  }, [])

  return (
    <>
    <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll">Live Chat
      {chatMessage.map((chat,i)=><ChatMessage key={i} name={chat.name} text={chat.message}/>)}
    </div>
    <form className="ml-2 p-2 w-full border border-black" onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({
        name:"Navya",
        message:liveChatMessage
      }))
      setLiveChatMessage("");
    }}>
      <input type="text" className="px-2 mx-2 w-100" value={liveChatMessage} onChange={(e)=>setLiveChatMessage(e.target.value)}/>
      <button className="bg-blue-500 mx-2 px-2">Send</button>
    </form>
    </>

  )
}

export default LiveChat