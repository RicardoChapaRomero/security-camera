import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageFeed from './components/ImageFeed/ImageFeed';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import TabDashboard from './components/Tabs/Tab-Dashboard';
import TabCameras from './components/Tabs/Tab-Cameras';
import { useSelector, useDispatch } from 'react-redux';
import { increment, amountAdded } from './reducers/home';
import { useGetAllRecordsQuery } from './services/record';

const millisecondsPerMinute = 60000;
const minutesToAutoFetch = 1;
function App () {
  const myValue = useSelector((state) => state.home.value);
  const dispatch = useDispatch();
  const { data, isLoading, isFetching, isError, isSuccess} = useGetAllRecordsQuery(undefined, {pollingInterval: millisecondsPerMinute * minutesToAutoFetch});
  const [queryStatus, setQueryStatus] = useState("Loading...");

  useEffect(() => {
    if(isLoading){
      setQueryStatus("Loading...");
    } else if(isError){
      setQueryStatus("Error");
    }else if(isSuccess){
      setQueryStatus("Success");
    }

  }, [isLoading, isFetching, data, isSuccess, isError])

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
                <p> {"Query: " + queryStatus} </p>
                <p> {"State.Home.Value: " + myValue} </p>
                <button onClick={() => {
                  dispatch(increment());
                  }}>
                  Increment 
                </button>
                <button onClick={() => {
                  dispatch(amountAdded(5));
                  }}>
                  Add 5
                </button>
              </Container>  
              }
            />
          </Router>
        </div>
      </>
    );
}
export default App;
