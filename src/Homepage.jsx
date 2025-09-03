import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
              <h2 className='text-light' style={{ textAlign: "center",fontWeight:"bold" }}>Explore the Best Video Collections in One Place</h2>
              <h4 className='text-light' style={{ textAlign: "center",fontWeight:"bold" }}>From trending clips to timeless classics discover, watch, and enjoy our handpicked video gallery</h4>
              <h5>Add videos by </h5>
              <div className='container-fluid '>
                <div className="row">
                  <div className="col-lg-4 col-6 text-center"> <button onClick={handleShow} className='btn btn-primary py-2 px-3 mt-3'>Audio/video songs</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-2 px-3 mt-3'>Gaming Highlight</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-2 px-3 mt-3'>Travel & lifestyle</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-2 px-3 mt-3'>Anime contents</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-2 px-3 mt-3'>Education & tutorials</button></div>
                  <div className="col-lg-4 col-6 text-center"> <button className='btn btn-primary py-2 px-3 mt-3'>Others</button></div>
                </div>
                {/* modal */}
                <Modal show={show} onHide={handleClose} >
                  <Modal.Header closeButton   >
                    <Modal.Title  className='text-info'  style={{ fontWeight:"bold"}}>Add Videos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='Title' style={{ fontWeight:"bold"}} />
                     <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='Video image url' style={{ fontWeight:"bold"}} />
                      <input type="text" className='form-control py-2 text-center mt-2 bg-info text-light' placeholder='video url' style={{ fontWeight:"bold"}} />
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

    </>
  )
}

export default Homepage