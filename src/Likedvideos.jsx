import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Likedvideos() {
  return (
    <>
    <div id='likedvideomaindiv' className='pt-5 pb-5'>
      <h1 className='text-center text-danger'><FontAwesomeIcon icon={faHeart} className='me-3' />Liked Videos</h1>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {/* card */}
            <div className='container-fluid border border-3 border-info mt-4 p-1'>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <img className='w-100  py-lg-1 h-100' src="https://cdn.mos.cms.futurecdn.net/PWTc8zKY2p6SedHqNFmf8P-970-80.png" alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-12">
                  <div className='container-fluid p-0'>
                    <div className="row">
                      <div className="col-12"><marquee behavior="" direction=""><h4 className='text-center py-lg-3 text-light'>jsdakjskdajsdjalksjdksadasdasd</h4></marquee></div>
                      <div className="col-6"><button className='btn btn-primary w-100 py-lg-2'>Play</button></div>
                      <div className="col-6"><button className='btn btn-danger w-100 py-lg-2'>Remove</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* card */}
            <div className='container-fluid border border-3 border-info mt-4 p-1'>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <img className='w-100  py-lg-1 h-100' src="https://cdn.mos.cms.futurecdn.net/PWTc8zKY2p6SedHqNFmf8P-970-80.png" alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-12">
                  <div className='container-fluid p-0'>
                    <div className="row">
                      <div className="col-12"><marquee behavior="" direction=""><h4 className='text-center py-lg-3 text-light'>jsdakjskdajsdjalksjdksadasdasd</h4></marquee></div>
                      <div className="col-6"><button className='btn border border-3 border-primary text-primary w-100 py-lg-2'style={{fontWeight:"bold"}}>select</button></div>
                      <div className="col-6"><button className='btn  border border-3 border-danger text-danger w-100 py-lg-2'>select</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


             {/* card */}
            <div className='container-fluid border border-3 border-info mt-4 p-1'>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <img className='w-100  py-lg-1 h-100' src="https://cdn.mos.cms.futurecdn.net/PWTc8zKY2p6SedHqNFmf8P-970-80.png" alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-12">
                  <div className='container-fluid p-0'>
                    <div className="row">
                      <div className="col-12"><marquee behavior="" direction=""><h4 className='text-center py-lg-3 text-light'>jsdakjskdajsdjalksjdksadasdasd</h4></marquee></div>
                      <div className="col-6"><button className='btn btn-primary w-100 py-lg-2'>Play</button></div>
                      <div className="col-6"><button className='btn btn-danger w-100 py-lg-2'>Remove</button></div>
                    </div>
                  </div>
                </div>
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

export default Likedvideos