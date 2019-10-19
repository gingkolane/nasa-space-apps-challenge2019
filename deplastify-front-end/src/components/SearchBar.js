import React from 'react'

const SearchBar = props => {
  return(<div className='d-flex justify-content-around p-2' style={{width:'75%'}}>
    <img className='logo-sm'src='https://i.imgur.com/1F0AWbU.png' alt='bird with bottle'/>
    <span className=''></span>
    <input style={{width: '75%'}} className='border rounded' type='text' placeholder='Enter Location'/>
    <button className='btn btn-primary'>Search</button>
  </div>)
};

export default SearchBar