import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Game"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Movies"/>
      <Button name="Cooking"/>
      <Button name="News"/>
      <Button name="Cartoon"/>
      <Button name="Kids"/>
      <Button name="Travel"/>
      <Button name="Comedy"/>
    </div>
  )
}

export default ButtonList