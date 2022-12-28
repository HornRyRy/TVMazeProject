import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';


//Fetch call variables - may delete block after project has been completed
//Remember to use %20 as a place holder for a space in a url

//Query by name of actor
const terryQuery = "https://api.tvmaze.com/search/people?q=terry%20crews"


//if you know the TVMaze's designated ID for a show, you can fetch that show directly
//Example show below is searching by show id 670, which is Luther
const byIdSearch = "https://api.tvmaze.com/shows/670"

//Query by name of show
const byNameOfShow = "https://api.tvmaze.com/search/shows?q=family%20game%20fight"
const byNameOfShowTwo = "https://api.tvmaze.com/search/shows?q=house"
const girlsQuery = "https://api.tvmaze.com/search/shows?q=girls"


function App() {

  const [shows, setShows] = useState([])

const fetchData = async () =>{
  try{
    const req = await fetch(girlsQuery)
    const data = await req.json()
    //set state with state setter here
    setShows(data)
  }
  catch (error){alert(error)}
}

useEffect(() =>{
  fetchData()
}, [])

  return (
    <div className="App">
      Here is some content
    </div>
  );
}

export default App;
