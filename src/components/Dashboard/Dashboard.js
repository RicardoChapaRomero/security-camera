import React, { Component, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from './AppTable/AppTable';

/** This class handles the latest data retrieved from the camera detections
 * TODO(any): Define what data is going to be shown in the UI.
 */
function Dashboard() {
    const kHomeViewColumns = useMemo(() => [
      {
        Header: "Latest detections",
        columns: [
          {
            Header: "Name",
            accessor: "detection.name"
          },
          {
            Header: "Total number of appearances",
            accessor: "detection.appearances"
          },
          {
            Header: "Latest appearance",
            accessor: "detection.latest_timestamp"
          }
        ]
      }
    ], []);

    
    const kMockData = [
      {
        "name": 'Jamir',
        "appearances": 3,
        "latest_timestamp": "28/08/2021"
      }
    ];
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
                <Table columns={ kHomeViewColumns } data={ kMockData }/>
              </div>
            </Row>
          </Container>
        </Col>
      );
  }
export default Dashboard;
