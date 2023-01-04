import React, {useState} from 'react'

//some code

const ShowSearch = () => {
    const [search, setSearch] =useState('')

    const handleSearch = event => {
        setSearch(event.target.value)
    }
    

  return (
    <>
        <form id='header'>
            <label>Name of Show </label>
            <input 
                className='showSearchBar'
                type='text'
                name='name'
                value={search}
                onChange={handleSearch}
            ></input>
            <button className='searchButton'>Search</button>
        </form>
    </>
  )
}

export default ShowSearch


// <form 
//       onSubmit={handleSubmit}
//         className="form" 
//         autoComplete="off">
//         <h3>Add New Project</h3>

//         <label htmlFor="name">Name</label>
//         <input 
//           type="text" 
//           id="name" 
//           name="name" 
//           value={formData.name}
//           onChange={handleInput}
//           />

//         <label htmlFor="about">About</label>
//         <textarea 
//           id="about" 
//           name="about" 
//           value={formData.about}
//           onChange={handleInput}
//           />

//         <label htmlFor="phase">Phase</label>
//         <select 
//           value ={formData.phase} 
//           name="phase" 
//           id="phase"
//           onChange={handleInput}
//           >
//           <option>Select One</option>
//           <option value="1">Phase 1</option>
//           <option value="2">Phase 2</option>
//           <option value="3">Phase 3</option>
//           <option value="4">Phase 4</option>
//           <option value="5">Phase 5</option>
//         </select>

//         <label htmlFor="link">Project Homepage</label>
//         <input 
//           type="text" 
//           id="link" 
//           name="link" 
//           value={formData.link}
//           onChange={handleInput}
//         />

//         <label htmlFor="image">Screenshot</label>
//         <input  
//           type="text" 
//           id="image" 
//           name="image" 
//           onChange={handleInput}
//           value={formData.image}
//           />

//         <button 
//           type="submit"
//           >
//             Add Project</button>
//       </form>