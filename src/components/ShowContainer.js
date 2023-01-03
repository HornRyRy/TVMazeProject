import React from 'react'
import { useState } from 'react'
import Show from './Show'
import ferretSmall from '../ferretSmall.jpg'
//TODO - can we put the picture into the assets folder? how to navigate to?

const ShowContainer = ({someShows}) => {
  

    return (
    <div id='showSearchCardParent'> 
        <div id='searchResultCard'>
            {someShows.map(show => <Show 
            key={show.show.id} 
            name={show.show.name} 
            status = {show.show.status} 
            // TODO add ternary for img in case server doesn't have image
            
            //img = {ferretSmall}
            img ={show.show.image.medium}
            //{{show.show.image.medium} == true ? img={show.show.image.medium} : img={ferretSmall}}
            {...show}
             />)}
        </div>

        </div>
  )
}

export default ShowContainer;