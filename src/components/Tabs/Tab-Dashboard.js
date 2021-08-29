import React, { Component } from 'react';
import { Col, Row, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
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
              <Row>
                <Col xs={2}>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Azure ID</InputGroup.Text>
                    <FormControl
                      placeholder="1a2b3c4d"
                      aria-label="Detection ID"
                    />
                  </InputGroup>
                </Col>
                <Col xs={2}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <FormControl
                      placeholder="Person's Name"
                      aria-label="Detection Name"
                    />
                  </InputGroup>
                </Col>
                <Col xs={2}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Number of Appearances</InputGroup.Text>
                    <FormControl
                      placeholder="0"
                      aria-label="Number of Appearances"
                    />
                  </InputGroup>
                </Col>
                <Col xs={3}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Date of Registration</InputGroup.Text>
                    <FormControl
                      placeholder="DD/MM/YYYY"
                      aria-label="Date of Registration"
                    />
                  </InputGroup>
                </Col>
                <Col xs={3}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Last Seen</InputGroup.Text>
                    <FormControl
                      placeholder="DD/MM/YYYY"
                      aria-label="Last seen date"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex justify-content-center'>
                  <Button variant="outline-secondary">Filter the results</Button>{' '}
                </Col>
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
