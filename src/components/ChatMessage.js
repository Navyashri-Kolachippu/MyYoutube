import React from 'react'

const chatMessage = ({name,text}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
        <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        <span className="font-bold p-2">{name}</span>
        <span>{text}</span>
    </div>
  )
}

export default chatMessage