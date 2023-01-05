import React from 'react'

const Show = ({status="not found", name="not found", img }) => {


  return (
    <div id = {'searchCard'}>
        <div className='label'>{name}</div>
        <div className='label'>{status}</div>
        <img
        src = {img}
        //img ? {img} : {ferretpic}
        alt = {name}
        />

        <button className='likeButton'>👍</button>

    </div>
  )
}


export default Show;