import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import ShowContainer from './ShowContainer';
import ShowSearch from './ShowSearch';
import { Route, Routes, Link}  from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewContainer from './ReviewContainer';

function App() {
  const [reviews, setReviews] = useState([])
  const [someShows, setSomeShows] = useState([])
  const [queryByShow, setQueryByShow] = useState(['Family Game Fight'])



  const hardCodedSearchVariable = "simpsons"
  const varQuery = `https://api.tvmaze.com/search/shows?q=${queryByShow}`
  
  //for now, query by shows 
const fetchData = async () =>{
  try{
    const resp = await fetch(varQuery)
    const someShows = await resp.json()
    //set state with state setter here
    setSomeShows(someShows)

  }
  catch (error){alert(error)}
}

useEffect(() =>{
  fetchData()
}, [varQuery])        
//dependencies array - run once if array is empty



const handleSearch = event => {
  setQueryByShow(event.target.value)

}


  return (
      <main className="App">
      
      <nav>
        <ul id='navBar'>
          <Link to="/">Home</Link>
          <Link to="/reviews/new">Create New Review</Link>
          <Link to="/reviews">Reviews</Link>
        </ul>

      </nav>
        <Routes>
          <Route path='/reviews/new' element={<ReviewForm setReviews={setReviews}/>}/>

          <Route path="/reviews" element={<ReviewContainer />}/> 
          
          <Route path='/' element={<><ShowSearch queryByShow =   {queryByShow} setQueryByShow= {setQueryByShow} handleSearch= {handleSearch} />  <ShowContainer someShows= {someShows} /> </>} />
          
        </Routes>
      </main>

  );
}

export default App;