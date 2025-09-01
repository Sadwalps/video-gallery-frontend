import React from 'react'
import Header from './Header'

function Homepage() {
  return (
    <>
      <div className='homepagemaindiv'>
        <Header />
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8  d-flex flex-column justify-content-center align-items-center mt-5 pt-5 ">
              <h2 className='text-light' style={{ textAlign: "center" }}>Explore the Best Video Collections in One Place</h2>
              <h4 className='text-light' style={{ textAlign: "center" }}>From trending clips to timeless classics discover, watch, and enjoy our handpicked video gallery</h4>
              <h5>Add videos by </h5>
              <div className='container-fluid '>
                <div className="row">
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Malayalam songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Tamil songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Hindi songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Anime songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Others</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-3 PX-3 mt-3'>Others</button></div>
                </div>
               
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default Homepage