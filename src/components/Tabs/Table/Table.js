import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { ChevronDown, ChevronUp } from "heroicons-react";
import { useGetMainDashQuery } from '../../../services/dashboardData';
import { Avatar } from '@material-ui/core';
import paginationFactory from 'react-bootstrap-table2-paginator';

const millisecondsPerMinute = 60000;
const minutesToAutoFetch = 1;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={`http://security-system-vision.ngrok.io/faces/${props.azure_id}.jpg`} alt="W3Schools.com"/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function UserTable() {
  const [selectedAzureId, setSelectedAzureId] = useState(-1);
  const [selectedName, setselectedName] = useState("Pepe");
  const { data, isLoading, isFetching, isError, isSuccess} = useGetMainDashQuery(undefined, {pollingInterval: millisecondsPerMinute * minutesToAutoFetch});

  const [modalShow, setModalShow] = React.useState(false);
  const [queryStatus, setQueryStatus] = useState("Loading...");

  useEffect(() => {
    console.log(data);
    console.log(isSuccess);
    if(isLoading){
      setQueryStatus("Loading...");
    } else if(isError){
      setQueryStatus("Error");
    }else if(isSuccess){
      setQueryStatus("Success");
    }
    console.log(queryStatus);
  }, [isLoading, isFetching, data, isSuccess, isError])
  
  const ImageFormatter = (cell, row) => {
    return (
      <Avatar alt={row.name} src={cell} />
    );
  };

  const getDate = (timestamp) => {
    timestamp.replace("Z", "");

    const date = timestamp.split("T")[0];
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    const date2 = timestamp.split("T")[1].split(".")[0];

    const hours = date2.split(":")[0];
    const minutes = date2.split(":")[1];
    const seconds = date2.split(":")[2];

    return new Date(year, month - 1, day, hours, minutes, seconds);

  }
   const TimeStampFormatter = (cell, row) => {
    const timestampFilter = getDate(row.latest_timestamp);
    const today = new Date();
    const deltaSeconds = timestampFilter ? Math.floor((timestampFilter - today)/1000) : 0;
    const deltaMinutes = timestampFilter ? Math.floor(deltaSeconds/60) : 0;
    const deltaHours = timestampFilter ? Math.floor(deltaMinutes/60) : 0;
    const deltaDays = timestampFilter ? Math.floor(deltaHours/24) : 0;  
    return (
      <a href={`/Cameras?days=${deltaDays}&hours=${deltaHours}&min=${deltaMinutes}&sec=${deltaSeconds}`}> {timestampFilter.toLocaleString()}</a>
    );
  }
    const columns = [{
      dataField: 'azure_id',
      text: 'Id',
      filter: textFilter(),
      sort: true,
      sortCaret: (order, column) => {
          if (!order) return <ChevronDown/>;
      else if (order === 'asc') return <ChevronUp/>;
      else if (order === 'desc') return <ChevronDown/>;
      return null;
      }
    }, {
      dataField: 'name',
      text: 'Name',
      filter: textFilter(),
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return <ChevronDown/>;
      else if (order === 'asc') return <ChevronUp/>;
      else if (order === 'desc') return <ChevronDown/>;
      return null;
      }
    }, {
      dataField: 'latest_timestamp',
      text: 'Latest timestamp',
      formatter: TimeStampFormatter
    }, {
        dataField: 'image',
        text: 'Image',
        sort: false,
        formatter: ImageFormatter
    }];
      
      const kMockData = [
        {
          "id": 1,
          "azure_id": 23234314,
          "name": 'Jamir',
          "alert": true,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "28/08/2021",
          "image": "http://security-system-vision.ngrok.io/faces/77f31401-5bf5-4261-bb22-0df51ef84a1d.jpg"
        },
        {
          "id": 2,
          "azure_id": 23234340,
          "name": 'Zeta',
          "alert": true,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "27/08/2020",
          "image": "http://security-system-vision.ngrok.io/faces/77f31401-5bf5-4261-bb22-0df51ef84a1d.jpg"
        },
        {
          "id": 3,
          "azure_id": 213434,
          "name": 'Chapa',
          "alert": false,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "27/08/2019",
          "image": "http://security-system-vision.ngrok.io/faces/77f31401-5bf5-4261-bb22-0df51ef84a1d.jpg"
        }
      ];
      let rows = [];
      data?.data.forEach((singleData, index )=> {
        rows.push( {
          "id": index,
          "azure_id": singleData.id_person,
          "name": singleData.name,
          "latest_timestamp": singleData.seen_on,
          "image": `http://security-system-vision.ngrok.io/faces/${singleData.id_person}.jpg`
        });
      })
  
      const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        style: (row, rowIndex) => {
          const backgroundColor = '#00BFFF';
          setSelectedAzureId(row.azure_id);
          setselectedName(row.name);
          return { backgroundColor };
        }
      };
      const rowEvents = {
        onClick: (e, row, rowIndex) => {
          setSelectedAzureId(row.azure_id);
          setselectedName(row.name);
          setModalShow(true);
        }
      };
        return(
          <Col className='data-wrapper d-flex justify-content-center pt-5'>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              azure_id= {selectedAzureId}
              name={selectedName}
            />
            <Container fluid>
              <Row>
                <div className='dashboard-container'>
                <h2 className='text-center'> Record History </h2>
                </div>
              </Row>
              <Row>
                <div className='info-table-wrapper'>
                  <BootstrapTable keyField='id'
                   pagination={ paginationFactory() } 
                   data={ rows } 
                   columns={ columns } 
                   selectRow = {selectRow} 
                   rowEvents={rowEvents}
                   filter={ filterFactory() }
                   striped hover condensed/>
                </div>
              </Row>
            </Container>
          </Col>
        );
    }
  export default UserTable;