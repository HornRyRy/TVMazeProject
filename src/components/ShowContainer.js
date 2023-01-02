import React from 'react'
import { useState } from 'react'
import Show from './Show'

const ShowContainer = ({someShows}) => {
  

    return (
    <div>
        
        <div>
            {someShows.map(show => <Show 
            key={show.show.id} 
            name={show.show.name} 
            status = {show.show.status} 
            img ={show.show.image.medium}
            {...show}
             />)}
        </div>

        </div>
  )
}

export default ShowContainer;