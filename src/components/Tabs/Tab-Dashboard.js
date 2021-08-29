import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import UserTable from './Table/Table';

class TabDashboard extends Component {
  render() {
    return(
      <div className='tab-dashboard-wrapper'>
        <Container fluid>
          <Row>
            <Col className='tab-dashboard justify-content-center'>
              <Row className='text-center'>
                <h1>Your stats</h1>
              </Row>
              <Row className='justify-content-center'>
                <UserTable/>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default TabDashboard;
