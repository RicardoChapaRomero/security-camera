import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import './Tab-Cameras.css';
import { useSelector } from 'react-redux';

function TabCameras () {
  const [sliderValue, setSliderValue] = useState(100); 
  const timestampFilter = useSelector((state) => state.home.timestampFilter);
  const today = new Date();
  const deltaSeconds = timestampFilter ? Math.floor((today - timestampFilter)/1000) : 0;
  const deltaMinutes = timestampFilter ? Math.floor(deltaSeconds/60) : 0;
  const deltaHours = timestampFilter ? Math.floor(deltaMinutes/60) : 0;
  const deltaDays = timestampFilter ? Math.floor(deltaHours/24) : 0;

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  }
  return(
    <Col sm={12} className='image-wrapper d-flex pt-5'>
      <Container>
        <Row className='justify-content-center'>
          <h2 className='text-center'>Camera #1</h2>
        </Row>
        <Row>
          <div className='live-container'>
          <img src={`http://security-system-vision.ngrok.io/camara?deltaDays=${deltaDays}&deltaHours=${deltaHours}&deltaMinutes=${deltaMinutes}&deltaSeconds=${sliderValue === 100 ? deltaSeconds : (100 - sliderValue)} &deltaFPS=-10`}  className='rounded img-fluid shadow-4 border border-dark' alt='...' />
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
export default TabCameras;
