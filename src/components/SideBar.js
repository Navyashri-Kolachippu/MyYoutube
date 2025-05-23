import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;//early return

  return (
    <div className="shadow-lg p-5 w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Shorts
        </li>
        <li>
          Video
        </li>
        <li>
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>
          Music
        </li>
        <li>
          Sports
        </li>
        <li>
          Gaming
        </li>
        <li>
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>
          Music
        </li>
        <li>
          Sports
        </li>
        <li>
          Gaming
        </li>
        <li>
          Movies
        </li>
      </ul>
    </div>
  )
}

export default SideBar