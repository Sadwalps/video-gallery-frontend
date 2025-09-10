import React from 'react'
import videoGalleryIcon from './assets/video-gallery-icon.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
    <div className='container-fluid p-4' id='footermaindiv'>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <div className='d-flex '><img src={videoGalleryIcon} alt="" style={{width:"50px",height:"47px"}} />
          <h3 className='mt-2 ms-3'>Video gallery</h3></div>
          <h4 className='mt-2'>Watch. Feel. Remember</h4>
        </div>
        <div className='col-md-2 d-flex justify-content-center align-items-center fs-4'>
           <div><Link to={'likedvideos'} className=''><FontAwesomeIcon icon={faHeart}  /></Link> liked videos</div>
        </div>
        <div className="col-md-4">
          <h3 className='text-center mt-3 text-light' style={{textDecoration:"underline"}}>Contact</h3>
          <div className=' d-flex justify-content-center gap-5 fs-4'>
              <div className="text-light"><FontAwesomeIcon icon={faWhatsapp} /></div>
              <div className="text-light"><FontAwesomeIcon icon={faInstagram} /></div>
              <div className="text-light"><FontAwesomeIcon icon={faFacebook} /></div>
              <div className="text-light"><FontAwesomeIcon icon={faTwitter} /></div> 
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Footer