import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emptybox from './assets/emptybox.png'
import Modal from 'react-bootstrap/Modal';
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import { deleteTravelAndLifestyleAPI, getTravelAndLifestyleAPI } from './service/allApi';
import Videocard from './Videocard';
function TravelAndLifestyle() {
  const [show, setShow] = useState(false);
  const [travelandlifestyle, setTravelandlifestyle] = useState([])
  const [deleteStatus, setDeleteStatus] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gettravelandlifestyle = async () => {
    const result = await getTravelAndLifestyleAPI()
    console.log(result);
    setTravelandlifestyle(result.data)

  }
  console.log(travelandlifestyle);

  const handleDelete = async (id) => {
    const result = await deleteTravelAndLifestyleAPI(id)
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result)
      alert(`Video Successfully Deleted`)
    } else {
      alert(`Something Went Wrong`)
    }

  }

  useEffect(() => {
    gettravelandlifestyle()
  }, [deleteStatus])
  return (
    <>
      <div className='videopages'>
        <div className='pb-4'>
          <Link to={"/"}> <button className='btn btn-primary px-3 py-2 ' style={{ float: "right" }} > back to home</button></Link>
          <button className='btn btn-primary ' onClick={handleShow}>
            Add
          </button>

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

        <h1 className='text-center text-primary pt-5 pb-lg-4 pb-1'><FontAwesomeIcon icon={faGlobe} className='me-3' />Travel And Lifestyle</h1>

        {travelandlifestyle?.length > 0 ? <div className='container-fluid pb-5' style={{minHeight:"75vh"}}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              {/* row for cards */}
              <div className="row">
                {/* col for a single card */}
                {travelandlifestyle?.map((item) => (<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center px-lg-1 px-md-1 px-4 ">
                  <Card className='border border-3 border-info mt-4 p-1' style={{ width: '100%', backgroundColor: "transparent" }}>
                    <Card.Img variant="top" className='w-100  py-lg-1 h-100' src={item?.videoimgurl} />
                    <Card.Body>
                      <div className='container-fluid p-0'>
                        <div className="row">
                          <div className="col-12"><marquee behavior="" direction=""><h4 className='text-center py-lg-3 text-light'>{item?.title}</h4></marquee></div>
                          <div className="col-4"><Videocard video={item} /></div>
                          <div className='col-4'><button className='btn  border border-3 border-danger  w-100 py-lg-2' id='likedbtn'><FontAwesomeIcon icon={faHeart} /></button></div>
                          <div className="col-4"><button onClick={() => handleDelete(item?.id)} className='btn  border border-3 border-danger  w-100 py-lg-2' id='removebtn'>Delete</button></div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>))}

              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div> :


          <div id='' className='container-fluid '>
            <div className="row " >
              <div className="col-md-2"></div>
              <div className="col-md-8 d-flex flex-column   justify-content-center align-items-center" style={{ height: "75vh" }}>
                <img src={emptybox} className='emptyimg' alt="" />
                <h1 className='emptytitle'>No videos added yet</h1>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>}

      </div>
    </>
  )
}

export default TravelAndLifestyle