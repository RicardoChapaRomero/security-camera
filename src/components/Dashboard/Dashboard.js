import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ChevronDown, ChevronUp } from "heroicons-react";
import { useGetTopDataQuery } from '../../services/record';
import cellEditFactory from 'react-bootstrap-table2-editor';


const millisecondsPerMinute = 60000;
const minutesToAutoFetch = 1;
/** This class handles the latest data retrieved from the camera detections
 * TODO(any): Define what data is going to be shown in the UI.
 */
 function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body clas>
       <img src={`http://security-system-vision.ngrok.io/faces/${props.azure_id}.jpg`} alt="W3Schools.com"/>     
       </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide} variant="light">Close</Button>
        <Button onClick={() => {
          //handle Add Alarm
          props.onHide();
        }} variant="danger">Add Alarm</Button>
      </Modal.Footer>
    </Modal>
  );
}

class QualityRanger extends React.Component {

  getValue() {
    return this.range.value;
  }
  render() {
    const { value, onUpdate, ...rest } = this.props;
    return [
      <input
        { ...rest }
        key="range"
        ref={ node => this.range = node }
        type="range"
        min="0"
        max="100"
      />,
      <button
        key="submit"
        className="btn btn-default"
        onClick={ () => onUpdate(this.getValue()) }
      >
        done
      </button>
    ];
  }
}

function Dashboard() {

  const [selectedAzureId, setSelectedAzureId] = useState(-1);
  const [selectedName, setselectedName] = useState("Pepe");
  const { data, isLoading, isFetching, isError, isSuccess} = useGetTopDataQuery(undefined, {pollingInterval: millisecondsPerMinute * minutesToAutoFetch});
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

  const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true,
    sortCaret: (order, column) => {
      if (!order) return <ChevronDown/>;
    else if (order === 'asc') return <ChevronUp/>;
    else if (order === 'desc') return <ChevronDown/>;
    return null;
    },
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
      <QualityRanger { ...editorProps } value={ value } />
    )
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
    let rows = [];
    data?.data.forEach((singleData, index )=> {
      rows.push( {
        "id": index,
        "azure_id": singleData.id_azure,
        "name": singleData.name,
        "appearances": singleData.appearances,
        "latest_timestamp": singleData.last_seen,
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
        <Col sm={5} className='data-wrapper d-flex justify-content-center pt-5'>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            azure_id= {selectedAzureId}
            name={selectedName}
          />
          <Container>
            <Row>
              <div className='dashboard-container'>
              <h2> Dashboard UI with the latest data </h2>
              </div>
            </Row>
            <Row>
              <div className='info-table-wrapper'>
              <BootstrapTable cellEdit={ cellEditFactory({ mode: 'click' }) } keyField='id' data={ rows } columns={ columns } selectRow = {selectRow} rowEvents={rowEvents} striped hover condensed/>
              </div>
            </Row>
          </Container>
        </Col>
      );
  }
export default Dashboard;
