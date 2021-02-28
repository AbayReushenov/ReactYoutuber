import React, { useState, useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import uniqid from 'uniqid';

export default function ContextForm() {
  const [dela, updateDela] = useContext(DataContext);
  const [nowItem, setNewItem] = useState('');

  function handlerItem(e) {
    setNewItem(e.target.value.toLowerCase());
  }

  function handlerAddDelo(event) {
    event.preventDefault();
    updateDela([...dela, { name: nowItem, status:false, key: uniqid() }]);
    setNewItem('');
    // console.log(dela);
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handlerAddDelo}
      className="d-flex justify-content-between"
    >
      <input
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
