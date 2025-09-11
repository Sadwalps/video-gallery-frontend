import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Songs() {
  return (
    <>
    
    <div className='videopages'>
      <div className=''>
       <Link to={"/"}> <button className='btn btn-primary px-3 py-2 ' style={{float:"right"}} > back to home</button></Link> 
      </div>
      <h1 className='text-center text-primary pt-lg-5 pt-3 pb-lg-4 pb-2'><FontAwesomeIcon icon={faHeadphones} className='me-3' />Liked Videos</h1>
      <div>

      </div>

    </div>
    </>
  )
}

export default Songs