
import React, { useEffect, useState } from 'react'
import Reviews from './Reviews'

const ReviewContainer = () => {
    const [showReview, setShowReview] = useState({})

    useEffect(() => {
        fetch('http://localhost:8888/reviews')
            .then(res => res.json())
            .then(review => setShowReview(review))
      }, [])

  return (
    <div>
        <Reviews name={showReview.name} review={showReview.review}/>
    </div>
  )
}

export default ReviewContainer
