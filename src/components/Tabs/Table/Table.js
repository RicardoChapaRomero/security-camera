import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { ChevronDown, ChevronUp } from "heroicons-react";
import { useGetMainDashQuery } from '../../../services/dashboardData';
import { Avatar } from '@material-ui/core';

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
      filter: textFilter(),
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return <ChevronDown/>;
      else if (order === 'asc') return <ChevronUp/>;
      else if (order === 'desc') return <ChevronDown/>;
      return null;
      }
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