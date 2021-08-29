import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** This class handles to post the live feed from the camera. */
class ImageFeed extends Component {
  render() {
    return(
      <Col sm={7} className='image-wrapper d-flex pt-5'>
        <Container>
          <Row className='justify-content-center'>
            <h2 className='text-center'>Live feed from camera</h2>
          </Row>
          <Row>
            <div className='image-container'>
              <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' className='rounded img-fluid shadow-4 border border-dark' alt='...' />
            </div>
          </Row>
          <Row>
            <h3 className='video-time-stamp text-center'>28/08/2021 19:34:20</h3>
          </Row>
        </Container>
      </Col>
    );
  }
}
export default ImageFeed;
