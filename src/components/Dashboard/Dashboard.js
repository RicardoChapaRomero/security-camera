import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ChevronDown, ChevronUp } from "heroicons-react";

/** This class handles the latest data retrieved from the camera detections
 * TODO(any): Define what data is going to be shown in the UI.
 */
function Dashboard() {

  const [selectedAzureId, setSelectedAzureId] = useState(-1);
  const columns = [{
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
    dataField: 'appearances',
    text: 'Appearances',
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

  }];
    
    const kMockData = [
      {
        "id": 1,
        "azure_id": 23234314,
        "name": 'Jamir',
        "appearances": 3,
        "latest_timestamp": "28/08/2021"
      },
      {
        "id": 2,
        "azure_id": 23234340,
        "name": 'Zeta',
        "appearances": 2,
        "latest_timestamp": "27/08/2020"
      },
      {
        "id": 3,
        "azure_id": 23434,
        "name": 'Chapa',
        "appearances": 5,
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
      return(
        <Col sm={5} className='data-wrapper d-flex justify-content-center pt-5'>
          <Container>
            <Row>
              <div className='dashboard-container'>
              <h2> Dashboard UI with the latest data </h2>
              </div>
            </Row>
            <Row>
              <div className='info-table-wrapper'>
              <BootstrapTable keyField='id' data={ kMockData } columns={ columns } selectRow = {selectRow}/>
              </div>
            </Row>
          </Container>
        </Col>
      );
  }
export default Dashboard;
