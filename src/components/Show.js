import React from 'react'
import { useState } from 'react'


const Show = ({status="not found", name="not found", img }) => {

    const [showLikes, setShowLikes] = useState(0)

    const handleClick = async (e) =>{
        //console.log("inside handleclick")
        const resp = await fetch("http://localhost:8888/favorites",{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(showLikes)
            
        })
    }


  return (
    <div className = {'searchCard'}>
        <div>{name}</div>
        <div>{status}</div>
        <img
        src = {img}
        //img ? {img} : {ferretpic}
        alt = {name}
        />
        <button className='likeButton' name='likeBtn' onClick = {handleClick}>👍</button>
    </div>
  )
}


export default Show;