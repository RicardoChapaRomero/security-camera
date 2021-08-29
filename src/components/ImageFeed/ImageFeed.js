import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import './ImageFeed.css';
/** This class handles to post the live feed from the camera. */
function ImageFeed() {
  const [sliderValue, setSliderValue] = useState(100); 
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  }
    return(
      <Col sm={7} className='image-wrapper d-flex pt-5'>
        <Container>
          <Row className='justify-content-center'>
            <h2 className='text-center'>Live feed from camera</h2>
          </Row>
          <Row>
            <div className='live-container'>
              <img src={true ? 'https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' : 'http://security-system-vision.ngrok.io/camara?deltaDays=0&deltaHours=0&deltaMinutes=0&deltaSeconds=' + (100 - sliderValue).toString()}  className='rounded img-fluid shadow-4 border border-dark' alt='...' />
              <div onClick = {() => {setSliderValue(100)}}style={{backgroundColor : sliderValue === 100 ? "red" : "grey"}} className="top-right "> En Directo </div>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                color="secondary"
                className="slider"
              />
            </div>
          </Row>
        </Container>
      </Col>
    );
}
export default ImageFeed;
