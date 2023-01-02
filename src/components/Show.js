import React from 'react'

const Show = ({status="not found", name="not found", img }) => {
  return (
    <div>
        <div>{name}</div>
        <div>{status}</div>
        <img
        src = {img}
        //alt = {name}
        />
        
    </div>
  )
}


export default Show;