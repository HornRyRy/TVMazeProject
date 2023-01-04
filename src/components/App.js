import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import ShowContainer from './ShowContainer';



//Fetch call variables - will likely delete block after project has been completed
//Remember to use %20 as a place holder for a space in a url

//Query by name of actor
const terryQuery = "https://api.tvmaze.com/search/people?q=wil%20wheaton"


//if you know the TVMaze's designated ID for a show, you can fetch that show directly
//Example show below is searching by show id 670, which is Luther
const byIdSearch = "https://api.tvmaze.com/shows/670"

//Query by name of show
const byNameOfShow = "https://api.tvmaze.com/search/shows?q=house%20of%20dragons"
const byNameOfShowTwo = "https://api.tvmaze.com/search/shows?q=wednesday"

const girlsQuery = `https://api.tvmaze.com/search/shows?q=girls`
//Additionally, you can get an array of the episodes for the search with the following syntax:
const girlsWithEpisodes = "https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes"
//Using embeds (see https://www.tvmaze.com/api#embedding) you can query multiple items at once
//For instance, the below query returns information about the show, plus 2 collections
const anotherGirlsQuery = "https://api.tvmaze.com/shows/1?embed[]=episodes&embed[]=cast"

//Query by Airing schedule - get an array of shows by air date-streaming services NOT included
const byDateOfAir = "https://api.tvmaze.com/schedule?country=US&date=2022-12-28"

//Query for cast - use show id
const byShowGetCast = "https://api.tvmaze.com/shows/66/cast"

//Query for Wil Wheaton's show appearances - TODO - not quite working as intended
const whereIsWillBang = "https://api.tvmaze.com/people/12814/guestcastcredits?embed=show&embed=episode"
const willHadDone = "https://api.tvmaze.com/shows?page=62"

//query for show updates within a time period -TODO - not quite working
const updatesByShow = "https://api.tvmaze.com/updates/shows?q=expanse&since=month"

const byActor = "https://api.tvmaze.com/search/people?q=terry%20crews"




//TODO - trying to store a collection of shows in a state variable
//shows is never used? per console
function App() {

  const [someShows, setSomeShows] = useState([])

  //You can use the below variable to quickly test querys
  const hardCodedSearchVariable = "simpsons"
  const varQuery = `https://api.tvmaze.com/search/shows?q=${hardCodedSearchVariable}`
  



  //for now, query by shows 
const fetchData = async () =>{
  try{
    const resp = await fetch(varQuery)
    const someShows = await resp.json()
    //set state with state setter here
    setSomeShows(someShows)



    //TODO lets get an array of objects from a search query

    // const currentShows = shows.map(show => {
    //   return {...show}
    // })

    // //setSomeShows(currentShows)
  }
  catch (error){alert(error)}
}

useEffect(() =>{
  fetchData()
}, [])        //dependencies array - run once if array is empty


  return (
    <div className="App">
      
      <ShowContainer someShows={someShows} />
    </div>
  );
}

export default App;
