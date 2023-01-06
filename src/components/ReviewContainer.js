
import React, { useEffect, useState } from 'react'
import Reviews from './Reviews'

const ReviewContainer = () => {
    const [showReview, setShowReview] = useState([])

    // console.log(showReview)

    useEffect(() => {
        fetch('http://localhost:8888/reviews')
            .then(res => res.json())
            .then(review => setShowReview(review))
      }, [])

      const mappedReviews = showReview.map(review => <Reviews key={review.id} name={review.name} review={review.review}/>)
   

  return (
    <div id='reviewContainer'>
        {mappedReviews}
    </div>
  )
}

export default ReviewContainer
