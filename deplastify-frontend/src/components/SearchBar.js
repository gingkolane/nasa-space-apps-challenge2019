import React from 'react'

const SearchBar = props => {

  return(<div className='d-flex justify-content-left p-2 mt-2 search-bar'>
    {/*<img className='logo-sm 'src='https://i.imgur.com/1F0AWbU.png' alt='bird with bottle'/>*/}
    <input style={{width: '75%', paddingLeft:'8px'}} className='border rounded' type='text' placeholder='Enter Location'
    value='searching for: New York'/>
    <button className='btn btn-primary ml-2'>Search</button>
  </div>)
};

export default SearchBar