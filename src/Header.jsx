import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import videoGalleryIcon from './assets/video-gallery-icon.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={videoGalleryIcon}
              width="50"
              height="45"
              className="d-inline-block align-top"
            />{' '}

          </Navbar.Brand>
          <div className='hearticondiv d-flex flex-column justify-content-center align-items-center ' >
           <Link to={'likedvideos'} className='hearticon'><FontAwesomeIcon icon={faHeart}  /></Link> 
           
          </div>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header