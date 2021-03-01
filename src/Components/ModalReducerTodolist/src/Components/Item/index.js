import style from './style.module.css'
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/actionCreators/tasks';
import { deleteTask } from '../../redux/actionCreators/tasks';


function Item({ id, index, text, status }) {

  const dispatch = useDispatch();

  const updateStatus = () => {
    dispatch(changeStatus(id));
  }
  const deletetask = () => {
    dispatch(deleteTask(id));
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className={`${status ? style.done : ''}`}>
        {`${index} ${text}`}
      </div>
      <div className="d-flex">
        <button onClick={updateStatus} type="button" className="btn btn-primary">Status</button>
        <button onClick={deletetask} type="button" className="btn btn-danger">Delete</button>
      </div>
    </li>

  );
}

export default Item;
