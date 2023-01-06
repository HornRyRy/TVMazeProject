import React, {useState} from 'react'

const Show = ({status="not found", name="not found", img }) => {
  const [count, setCount] = useState(0)
  
  const handleClick = async (e) => {
    setCount(count+1)
    //console.log("inside handleclick")
    const postFavorite = {
      name: {name},
      status:{status},
      img:{img}
    }
    const resp = await fetch("http://localhost:8888/favorites",{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(postFavorite)
        
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
          <p>{count} Likes</p>
        

    </div>
  )
}


export default Show;
