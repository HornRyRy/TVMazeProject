import React, {useState} from 'react'

const Show = ({status="not found", name="not found", img }) => {
const [likeCount, setLikeCount] = useState(0)

const incrementCount = (event) => {


}

  return (
    <div id = {'searchCard'}>
        <div className='label'>{name}</div>
        <div className='label'>{status}</div>
        <img
        src = {img}
        //img ? {img} : {ferretpic}
        alt = {name}
        />

        <button 
          onClick={incrementCount} 
          className='likeButton'>👍 : {likeCount} </button>
        

    </div>
  )
}


export default Show;
