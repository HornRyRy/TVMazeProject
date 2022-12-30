import React from 'react'

const Show = ({status, name, img }) => {
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