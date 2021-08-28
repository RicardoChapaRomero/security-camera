import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

/** This class handles the latest data retrieved from the camera detections
 * TODO(any): Define what data is going to be shown in the UI.
 */
class Dashboard extends Component {
    render() {
        return(
            <Col sm={5} className='data-wrapper d-flex align-items-center justify-content-center'>
              <div className='dashboard-container'>
                Dashboard UI with the latest data
              </div>
            </Col>
        );
    }
}
export default Dashboard;
