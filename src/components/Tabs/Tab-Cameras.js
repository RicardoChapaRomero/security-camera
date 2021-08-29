import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import './Tab-Cameras.css';

function TabCameras () {
  const [sliderValue, setSliderValue] = useState(100); 
  const [queryString, setQueryString] = useState(window.location.search);
  const urlParams = new URLSearchParams(queryString);
  const deltaMinutes = urlParams.has("min") ? urlParams.get('min') : "0";

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
          <img src={`http://security-system-vision.ngrok.io/camara?deltaDays=${urlParams.has('days') ? urlParams.get('days') : "0"}&deltaHours=${urlParams.has("hours") ? urlParams.get('hours') : "0"}&deltaMinutes=${sliderValue === 100 ? deltaMinutes : (100 - sliderValue).toString()}&deltaSeconds=${urlParams.has("sec") ? urlParams.get('sec') : "0"} &deltaFPS=-10`}  className='rounded img-fluid shadow-4 border border-dark' alt='...' />
            <div onClick = {() => {setSliderValue(100); window.history.replaceState(null, null, window.location.pathname); setQueryString("")}}style={{backgroundColor : sliderValue === 100 ? "red" : "grey"}} className="top-right "> En Directo </div>
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
