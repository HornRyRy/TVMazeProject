import React from 'react'
import { useState } from 'react'
import Show from './Show'
import ferretSmall from '../ferretSmall.jpg'
//TODO - can we put the picture into the assets folder? how to navigate to?

const ShowContainer = ({someShows}) => {
      
const mappedShows = someShows.map((show) =>{

    return (
        <Show 
        key = {show.show.id}
        name = {show.show.name}
        status = {show.show.status}
        img = {show.show.image && show.show.image.medium || ferretSmall }
         {...show}
         />)
  })
console.log(someShows)

    return (
    
        <div id='searchResultCard'>
            {mappedShows}
            {/* {someShows.map(show => <Show 
            key={show.show.id} 
            name={show.show.name} 
            status = {show.show.status} 
            // TODO add ternary for img in case server doesn't have image
            img ={show.show.image.medium}
            {...show}
             />)}  */}
        </div>

        
  )

  
}

export default ShowContainer;