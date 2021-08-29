import React, { useState } from 'react';
import { Col, Row, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import './Tab-Cameras.css';

function TabCameras () {
  const [sliderValue, setSliderValue] = useState(100); 
  const [queryString, setQueryString] = useState(window.location.search);
  const urlParams = new URLSearchParams(queryString);
  const deltaMinutes = urlParams.has("min") ? urlParams.get('min') : "0";

  let inputParams = {
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  }

  const handleVideoTrackerClick = () => {
    urlParams.set('days', inputParams.days);
    urlParams.set('hours', inputParams.hours);
    urlParams.set('min', inputParams.minutes);
    urlParams.set('sec', inputParams.seconds);
  }

  const updateLiveFeedSrc = () => {
    const live_feed_container = document.getElementById('live_feed_container');
    live_feed_container.src = `http://security-system-vision.ngrok.io/camara?deltaDays=${urlParams.get('days')}&deltaHours=${urlParams.get('hours')}&deltaMinutes=${sliderValue === 100 ? urlParams.get('min') : (100 - sliderValue).toString()}&deltaSeconds=${urlParams.get('sec')} &deltaFPS=-10`;
  }

  return(
    <Col sm={12} className='image-wrapper d-flex pt-5'>
      <Container>
        <Row className='justify-content-center'>
          <h2 className='text-center'>Camera #1</h2>
        </Row>
        <Row>
          <div className='live-container'>
          <img src={`http://security-system-vision.ngrok.io/camara?deltaDays=${urlParams.has('days') ? urlParams.get('days') : "0"}&deltaHours=${urlParams.has("hours") ? urlParams.get('hours') : "0"}&deltaMinutes=${sliderValue === 100 ? deltaMinutes : (100 - sliderValue).toString()}&deltaSeconds=${urlParams.has("sec") ? urlParams.get('sec') : "0"} &deltaFPS=-10`} id='live_feed_container' className='rounded img-fluid shadow-4 border border-dark' alt='...' />
            <div onClick = {() => {setSliderValue(100); window.history.replaceState(null, null, window.location.pathname); setQueryString("")}}style={{backgroundColor : sliderValue === 100 ? "red" : "grey"}} className="top-right "> En Directo </div>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              color="secondary"
              className="slider"
            />
          </div>
        </Row>
        <Row className="pt-5">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="timestamp-days">Days:</InputGroup.Text>
              <FormControl
                placeholder="Day"
                onChange = { e => inputParams.days = (e.target.value !== null) ? e.target.value : "0" }
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="timestamp-hours">Hours:</InputGroup.Text>
              <FormControl
                placeholder="Hours"
                onChange = { e => inputParams.hours = (e.target.value !== null) ? e.target.value : "0"  }
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="timestamp-minutes">Minutes:</InputGroup.Text>
              <FormControl
                placeholder="Minutes"
                onChange = { e => inputParams.minutes = (e.target.value !== null) ? e.target.value : "0" }
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="timestamp-seconds">Seconds:</InputGroup.Text>
              <FormControl
                placeholder="Seconds"
                onChange = { e => inputParams.seconds = (e.target.value !== null) ? e.target.value : "0"  }
              />
            </InputGroup>
          </Col>
          <Col>
            <Button className='timetracker-button' variant="primary" onClick= {() => { handleVideoTrackerClick(); updateLiveFeedSrc(); }}>Move Video Tracker</Button>{' '}
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
export default TabCameras;
