import React, {useState} from 'react'

const Show = ({status="not found", name="not found", img }) => {

  const handleClick = async (e) =>{
    //console.log("inside handleclick")
    const resp = await fetch("http://localhost:3000/favorites",{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        // body: JSON.stringify(SOMEVARIABLE)
        
    })
}

  return (
    <div id = {'searchCard'}>
        <div className='label'>{name}</div>
        <div className='label'>{status}</div>
        <img
        src = {img}
        alt = {name}
        />

        <button 
          onClick={handleClick} 
          className='likeButton'
          name='likeBtn'
          >👍</button>
        

    </div>
  )
}


export default Show;
