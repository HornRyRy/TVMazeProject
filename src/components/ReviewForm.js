import React, {useState} from 'react'

const ReviewForm = ({setReviews}) => {
  const initialFormValues = {
    name:'',
    review: ''
  }
  const [formData, setFormData]=useState(initialFormValues)


  const handleChange = (event) => {
    const {name,value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const postData = {
      name: formData.name,
      review: formData.review
    }
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(newData => setReviews(current => [...current, newData]))
    setFormData(initialFormValues)
  }

  return (
    <form onSubmit={handleSubmit} id='reviews'>
        <input 
            required
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeHolder='Show Title'></input>
        <textarea
            required 
            name='review'
            value={formData.review}
            onChange={handleChange}
            placeholder='Write review here'></textarea>
            <button  
              className='submitButton'>Submit Review</button>
    </form>

  )
}

export default ReviewForm
