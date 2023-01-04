import React, {useState} from 'react'

const ShowSearch = ({queryByShow, setQueryByShow}) => {
    //const [search, setSearch] =useState('')

    const handleSearch = event => {
        setQueryByShow(event.target.value)
    }
    

  return (
    <>
        <form>
            <label>Name of Show </label>
            <input 
                type='text'
                name='showName'
                value={queryByShow.name}
                onChange={handleSearch}
            ></input>

        </form>
    </>
  )
}

export default ShowSearch