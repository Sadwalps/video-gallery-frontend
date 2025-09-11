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
      <div className="row mt-lg-4 mb-lg-4 mt-2 mb-2">
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <div className='d-flex '><img src={videoGalleryIcon} alt="" style={{width:"50px",height:"47px"}} />
          <h3 className='mt-2 ms-3 text-light' style={{fontWeight:"bold"}}>Video gallery</h3></div>
          <h4 className='mt-2 text-light'>Watch. Feel. Remember</h4>
        </div>
        <div className='col-md-2 d-flex justify-content-center align-items-center fs-4'>
           <div><Link to={'likedvideos'} className='  footerlikedvideoslink'><FontAwesomeIcon icon={faHeart}  /> liked videos</Link></div>
        </div>
        <div className="col-md-4">
          <h3 className='text-center mt-3 text-light' style={{textDecoration:"underline",fontWeight:"bold"}}>Contact</h3>
          <div className=' d-flex justify-content-center gap-5 fs-4 pt-2'>
              <div className="footericons"><FontAwesomeIcon icon={faWhatsapp} className='icons'/></div>
              <div className="footericons"><FontAwesomeIcon icon={faInstagram}className='icons' /></div>
              <div className="footericons"><FontAwesomeIcon icon={faFacebook} className='icons'/></div>
              <div className="footericons"><FontAwesomeIcon icon={faTwitter} className='icons' /></div> 
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Footer