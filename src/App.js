import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';


const initialAPI = "http://someAPIaddress"
const girlsQuery = "https://api.tvmaze.com/search/shows?q=girls"
const terryQuery = "https://api.tvmaze.com/search/people?q=terry%20crews"
const brooklynQuery = "https://api.tvmaze.com/shows/6924/cast"
const byIdSearch = ""
const familyGameFight = "https://api.tvmaze.com/search/shows?q=family%20game%20fight"
//const findJC = "https://api.tvmaze.com/search/people?q=terry%20crews"

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
