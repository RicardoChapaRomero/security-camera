import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

/** This class handles to post the live feed from the camera. */
class ImageFeed extends Component {
    render() {
        return(
            <Col sm={7} className='image-wrapper d-flex align-items-center'>
                <div className='image-container'>
                    <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' className='img-fluid shadow-4' alt='...' />
                </div>
            </Col>
        );
    }
}
export default ImageFeed;
