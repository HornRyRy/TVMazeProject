import React from 'react'

const Show = ({status="not found", name="not found", img }) => {
  return (
    <div className = {'searchCard'}>
        <div>{name}</div>
        <div>{status}</div>
        <img
        src = {img}
        alt = {"image for " + name + " not found"}
        />
        
    </div>
  )
}


export default Show;