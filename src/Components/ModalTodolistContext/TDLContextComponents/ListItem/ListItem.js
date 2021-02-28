function ListItem({ id, odnodelo, handlerCheckStatus }) {
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
        <button type="button" disabled={odnodelo.status} class="btn btn-danger">
          Edit
        </button>
      </li>
    </ul>
  );
}
export default ListItem;
