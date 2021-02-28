import React from 'react';

export default function Footer() {
  return (
    <div className="d-flex flex-column bd-highlight">
      <label htmlFor="all">
        <input
          className="form-check-input"
          type="checkbox"
          name="all"
          id="all"
          value=""
        />
        All
      </label>
      <p>You have 0 to do</p>
      <button type="button" id="delete" class="btn btn-danger">
        Delete all
      </button>
    </div>
  );
}
