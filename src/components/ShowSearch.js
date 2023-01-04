import React, {useState} from 'react'

//some code

const ShowSearch = ({queryByShow, setQueryByShow, handleSearch}) => {
    //const [search, setSearch] =useState('')

    //handleSearch()

    // const handleSearch = event => {
    //     setQueryByShow(event.target.value)
    // }
    

  return (

    <div className='header'>    
        <label className='siteTitle'>Search Shows </label>
            
            <input 
                type='text'
                name='showName'
                value={queryByShow}
                onChange={handleSearch}
            ></input>
    </div>

  )
}

export default ShowSearch