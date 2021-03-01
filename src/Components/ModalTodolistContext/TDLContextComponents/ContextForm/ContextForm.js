import React, { useState, useContext, useEffect, useRef } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import uniqid from 'uniqid';

export default function ContextForm() {
  const [dela, updateDela] = useContext(DataContext);
  const [nowItem, setNewItem] = useState('');
  const itemInput = useRef();

  function handlerItem(e) {
    setNewItem(e.target.value.toLowerCase());
  }

  function handlerAddDelo(event) {
    event.preventDefault();
    updateDela([...dela, { name: nowItem, status: false, key: uniqid() }]);
    setNewItem('');
    itemInput.current.focus();
  }

  useEffect(() => {
    itemInput.current.focus();
  }, []);

  return (
    <form
      autoComplete="off"
      onSubmit={handlerAddDelo}
      className="d-flex justify-content-between"
    >
      <input
        ref={itemInput}
        required
        type="text"
        className="form-control"
        value={nowItem}
        onChange={handlerItem}
        placeholder="Добавить дело"
      />
      <button type="submit">Create</button>
    </form>
  );
}
