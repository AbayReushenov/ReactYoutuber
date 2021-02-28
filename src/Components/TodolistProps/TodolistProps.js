import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uniqid from 'uniqid';
import List from './List/List';

function TodolistProps() {
  const [nowItem, setNewItem] = useState(null);
  const [dela, updateDela] = useState([]);
  function handlerItem(e) {
    setNewItem(e.target.value);
  }
  function handlerAddDelo() {
    updateDela([...dela, { name: nowItem, key: uniqid() }]);
    setNewItem('');
    // console.log(dela);
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            <input
              value={nowItem}
              onChange={handlerItem}
              placeholder="Добавить дело"
            />
            <button onClick={handlerAddDelo}>+</button>
          </div>
          <div className="d-flex justify-content-between">
            {nowItem ? <p>I want to do "{nowItem}"</p> : ''}
          </div>
          <List dela={dela} updateDela={updateDela} />
        </Col>
      </Row>
    </Container>
  );
}

export default TodolistProps;
