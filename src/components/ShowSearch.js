import React, {useState} from 'react'

//some code

const ShowSearch = ({queryByShow, setQueryByShow, handleSearch}) => {
    //const [search, setSearch] =useState('')

    //handleSearch()

    // const handleSearch = event => {
    //     setQueryByShow(event.target.value)
    // }
    

  return (
    <>

        <label>Name of Show </label>
            <input 
                id='searchInput'
                type='text'
                name='showName'
                value={queryByShow}
                onChange={handleSearch}
            ></input>

    </>
  )
}

export default ShowSearch