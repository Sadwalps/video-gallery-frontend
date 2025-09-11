import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Songs from './Songs';
function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='homepagemaindiv'>
        <Header />
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8  d-flex flex-column justify-content-center align-items-center mt-5 pt-5 ">
              <h2 className='text-light' style={{ textAlign: "center", fontWeight: "bold" }}>
                🎬 Welcome to  Your Ultimate Video Gallery! </h2>
              <h4 className='text-light' style={{ textAlign: "center", fontWeight: "bold" }}>From trending clips to timeless classics discover, watch, and enjoy our handpicked video gallery</h4>

              <h5 className='text-light mb-3' style={{ textAlign: "center", fontWeight: "bold" }}> Upload Videos to Your Favorite Categories. </h5>
              <div className='container-fluid '>
                <div className="row">
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Audio/video songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Gaming Highlight</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Travel & lifestyle</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Anime contents</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Education & tutorials</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Others</button></div>
                </div>
                {/* modal */}
                <Modal show={show} onHide={handleClose} >
                  <Modal.Header closeButton   >
                    <Modal.Title className='text-info' style={{ fontWeight: "bold" }}>Add Videos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='Title' style={{ fontWeight: "bold" }} />
                    <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='Video image url' style={{ fontWeight: "bold" }} />
                    <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='video url' style={{ fontWeight: "bold" }} />
                  </Modal.Body>
                  <Modal.Footer >
                    <Button variant="danger" onClick={handleClose}>
                      Clear
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                      Add
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

        </div>
      </div>

      {/* about */}
      <div id='about'>
        <h1 className='text-center text-light pt-lg-5 pt-3 pb-lg-4 pb-2'>About</h1>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h3 className='text-light text-center'>It's a dynamic video gallery platform where users can easily explore and upload videos based on categories like Education, Music, gaming, and more.</h3>
              <h5 className='text-light text-center'>By using this platform ypu can Choose a category that fits your video best, add a title and video image url, video url and upload your content in just a few clicks. </h5>


              {/* categories */}
              <div className='container-fluid mt-lg-5 mt-3'>
                <h5 className='text-light text-center mb-4'>Now select a category and check added videos in it</h5>
                <div className="row">
                  <div className='col-lg-4 col-6 '><Link to={'songs'}> <div className='categorydiv'><img className='w-100 imgs' src="https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/69/7d/8e/697d8e82-6a57-5cff-9596-b75e8d903475/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" alt="" />
                  <h5 className='categoryname text-dark'>Audio/video songs</h5></div></Link></div>

                  <div className='col-lg-4 col-6 '><Link to={'gaminghighlight'}> <div className='categorydiv'><img className='w-100 imgs' src="https://fleble.com/wp-content/uploads/2021/12/fleble-pros-of-gaming-1024x538.jpg" alt="" /><h5 className='categoryname text-light'>Gaming Highlight</h5></div></Link></div>

                  <div className='col-lg-4 col-6 '><Link to={'travelandlifestyle'}> <div className='categorydiv'><img className='w-100 imgs' src="https://blog.kesari.in/wp-content/uploads/2017/09/Kesari-Tours-HillStationTips.jpg" alt="" /><h5 className='categoryname text-light'>Travel & lifestyle</h5></div></Link></div>
                  <div className='col-lg-4 col-6 '><Link to={'animecontent'}> <div className='categorydiv'><img className='w-100 imgs' src="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg" alt="" /><h5 className='categoryname text-light'>Anime contents</h5></div></Link></div>
                  <div className='col-lg-4 col-6 '><Link to={'educationandtutorial'}> <div className='categorydiv'><img className='w-100 imgs' src="https://tse1.mm.bing.net/th/id/OIP.L0QriE9s9rT43YdhQX5JggHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /> <h5 className='categoryname text-light'>Education & tutorials</h5></div></Link></div>
                  <div className='col-lg-4 col-6 '><Link to={'others'}> <div className='categorydiv'><img className='w-100 imgs' src="https://www.techsmith.es/blog/wp-content/uploads/2023/03/how-to-make-a-youtube-video.png" alt="" /> <h5 className='categoryname text-light'>Others</h5></div></Link></div>

                </div>
              </div>

            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      
        {/* Explore the Best Video Collections in One Place */}
      </div>

      <Footer/>


    </>
  )
}

export default Homepage