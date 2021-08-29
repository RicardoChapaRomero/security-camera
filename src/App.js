import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ImageFeed from './components/ImageFeed/ImageFeed';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import {useSelector, useDispatch} from 'react-redux';
import { increment, amountAdded} from './reducers/home';
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
        <NavBar/>
        <div className = 'app-container'>
          <Container fluid>
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
        </div>
      </>
    );
}
export default App;
