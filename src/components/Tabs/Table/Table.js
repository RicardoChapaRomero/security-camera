import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ChevronDown, ChevronUp } from "heroicons-react";

function UserTable() {
    const [selectedAzureId, setSelectedAzureId] = useState(-1);
    const [modalShow, setModalShow] = React.useState(false);
  
    const columns = [{
      dataField: 'azure_id',
      text: 'Id',
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
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return <ChevronDown/>;
      else if (order === 'asc') return <ChevronUp/>;
      else if (order === 'desc') return <ChevronDown/>;
      return null;
      }
    }, {
      dataField: 'alert',
      text: 'Alert',
      sort: false,  
    }, {
      dataField: 'registered_timestamp',
      text: 'Registered',
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
        sort: false
    }];
      
      const kMockData = [
        {
          "id": 1,
          "azure_id": 23234314,
          "name": 'Jamir',
          "alert": true,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "28/08/2021"
        },
        {
          "id": 2,
          "azure_id": 23234340,
          "name": 'Zeta',
          "alert": true,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "27/08/2020"
        },
        {
          "id": 3,
          "azure_id": 23434,
          "name": 'Chapa',
          "alert": false,
          "registered_timestamp": "15/08/2021",
          "latest_timestamp": "27/08/2019"
        }
      ];
      const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        style: (row, rowIndex) => {
          const backgroundColor = '#00BFFF';
          setSelectedAzureId(row.azure_id);
          return { backgroundColor };
        }
      };
      const rowEvents = {
        onClick: (e, row, rowIndex) => {
          setSelectedAzureId(row.azure_id);
          setModalShow(true);
        }
      };
        return(
          <Col className='data-wrapper d-flex justify-content-center pt-5'>
            <Container fluid>
              <Row>
                <div className='dashboard-container'>
                <h2 className='text-center'> Dashboard with the latest data </h2>
                </div>
              </Row>
              <Row>
                <div className='info-table-wrapper'>
                  <BootstrapTable keyField='id'
                   data={ kMockData } 
                   columns={ columns } 
                   selectRow = {selectRow} 
                   rowEvents={rowEvents}/>
                </div>
              </Row>
            </Container>
          </Col>
        );
    }
  export default UserTable;