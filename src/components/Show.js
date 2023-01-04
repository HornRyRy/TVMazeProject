import React from 'react'

const Show = ({status="not found", name="not found", img }) => {
  return (
    <div className = {'searchCard'}>
        <div>{name}</div>
        <div>{status}</div>
        <img
        src = {img}
        //img ? {img} : {ferretpic}
        alt = {name}
        />
        
    </div>
  )
}


export default Show;