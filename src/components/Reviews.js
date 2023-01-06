import React from 'react'

const Reviews = ({name, review}) => {
  return (
    <div className='reviewCard'>
    
      <h4 id='reviewName'>{name}</h4>
      <p id='reviewContent'>"{review}"</p>

    </div>
  )
}

export default Reviews
