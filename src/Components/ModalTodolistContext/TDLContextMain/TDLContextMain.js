import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TDLContextMain.css';
import ContextForm from '../TDLContextComponents/ContextForm/ContextForm';
import ContextList from '../TDLContextComponents/ContextList/ContextList';
import Footer from '../TDLContextComponents/Footer/Footer';
import { DataProvider } from '../TDLContextComponents/DataProvider/DataProvider';

function TDLContextMain() {
  return (
    <DataProvider>
      <Container fluid="md">
        <Row>
          <Col className="shadow-lg p-3 mb-5 bg-body rounded">
            <ContextForm />
            <ContextList />
            <Footer />
          </Col>
        </Row>
      </Container>
    </DataProvider>
  );
}

export default TDLContextMain;
