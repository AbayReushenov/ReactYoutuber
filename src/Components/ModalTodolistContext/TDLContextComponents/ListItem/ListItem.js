/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';

function ListItem({ id, odnodelo, handlerCheckStatus, handlerEditOdnoDelo }) {
  const [onEdit, setStateOnEdit] = useState(false);
  const [editValue, setStateEditValue] = useState(odnodelo.name);
  const handleEdit = () => {
    setStateOnEdit(true);
  };

  const handlerNameChange = (event) => {
    setStateEditValue(event.target.value.toLowerCase());
  };

  const handleSave = () => {
    setStateOnEdit(false);
    if (editValue) {
      handlerEditOdnoDelo(editValue, id);
    } else {
      setStateEditValue(odnodelo.name);
    }
  };

  if (onEdit) {
    return (
      <ul>
        <li className="d-flex justify-content-between border border-secondary">
          <input
            className="form-control"
            type="text"
            id={`${id}edit`}
            value={editValue}
            onChange={handlerNameChange}
            name="editValue"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="d-flex justify-content-between border border-secondary">
          <label htmlFor={id} className={odnodelo.status ? 'active' : ''}>
            <input
              id={id}
              className="form-check-input"
              type="checkbox"
              checked={odnodelo.status}
              onChange={() => handlerCheckStatus(id)}
            />
            {odnodelo.name}
          </label>
          <button
            type="button"
            disabled={odnodelo.status}
            className="btn btn-danger"
            onClick={handleEdit}
          >
            Edit
          </button>
        </li>
      </ul>
    );
  }
}
export default ListItem;
