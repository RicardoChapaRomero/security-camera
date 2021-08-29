import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ImageFeed from './components/ImageFeed/ImageFeed';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return(
      <>
        <div className = 'app-container'>
          <Container fluid>
          <NavBar/>
            <Row className='justify-content-center text-center'>
              <div className='page-title'>
                <h1 className='mb-3'>Welcome to SafeCam</h1>
              </div>
            </Row>
            <Row className='data-view-wrapper'>
              <ImageFeed/>
              <Dashboard/>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default App;
