import React from 'react'

const DataContainer = props => {
  return(<>
    <div className='container'>
    <div className='d-flex flex-column'>

      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>Location</h5>
          <p className='card-text'>Queens NY, NY</p>
        </div>
      </div>

      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>Trash Level</h5>
          <p className='card-text text-danger'>High</p>
        </div>
      </div>

      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>Organization</h5>
          <p className='card-text'>Organization details</p>
        </div>
      </div>



      </div>
    </div>
  </>)
};

export default DataContainer