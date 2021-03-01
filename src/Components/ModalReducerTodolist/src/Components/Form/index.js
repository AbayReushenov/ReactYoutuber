import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../redux/actionCreators/tasks';

function Form() {

    const[value, setValue] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim()) {
            dispatch(addNewTask(value.trim()));
            setValue('');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
