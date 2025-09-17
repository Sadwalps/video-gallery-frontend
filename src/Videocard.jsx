import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Videocard({video}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn border border-3 border-primary  w-100 py-lg-2 ' id='playbtn' onClick={handleShow}>Play</button>
     <Modal show={show} onHide={handleClose}  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" style={{height:"400px"}} src={video.videourl}  frameborder="0" autoPlay  ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-warning' onClick={handleClose}>
            Close
          </Button>   
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Videocard