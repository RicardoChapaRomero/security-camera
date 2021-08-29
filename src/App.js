import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageFeed from './components/ImageFeed/ImageFeed';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import TabDashboard from './components/Tabs/Tab-Dashboard';
import TabCameras from './components/Tabs/Tab-Cameras';

function App () {
    return(
      <>
        <div className = 'app-container'>
          <Router>
            <NavBar/>
            <Route
              exact path='/Dashboard'
              component = { () => <TabDashboard/>  }
            />
            <Route
              exact path='/Cameras'
              component = { () => <TabCameras/>  }
            />
            <Route
            exact path='/'
            component = { () =>
              <Container fluid>
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
              }
            />
          </Router>
        </div>
      </>
    );
}
export default App;
