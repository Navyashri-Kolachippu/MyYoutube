import React from 'react'

const Comment=({data})=>{
    console.log(data);
    const {name,text,replies}=data[0];
    return(
        <div className="flex rounded-lg shadow-sm bg-gray-100 p-2 my-2">
            <img className="w-8 h-8" alt="commenticon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <div className="px-2">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment;