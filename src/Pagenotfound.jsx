import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
   <>
   <div className='container-fluid' style={{backgroundColor:"black"}}>
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-2 d-flex flex-column justify-content-center align-items-center " style={{ height:"100vh"}}>
        
        <h1 className='pnfheading'>404</h1>
        <h2 className='pnfsubheading'>Page Not Found</h2>
         <Link to={"/"}> <button className='btn px-3 py-2 border border-3 border-danger  w-100 py-lg-2' id='removebtn' > back to home</button></Link>
          
          
        

      </div>
      <div className="col-md-1"></div>
    </div>
   </div>
   </>
  )
}

export default Pagenotfound