import * as TYPES from '../types/task';

function tasksReducer(tasks = [], action) {
    switch (action.type) {
        case TYPES.ADD_TASK:
            return [...tasks, action.data]
        case TYPES.DELETE_TASK:
            return tasks.filter(el => el.id !== action.data)
        case TYPES.CHANGE_STATUS:
            return tasks.map(el => {
                if (el.id === action.data) {
                    return { ...el, status: !el.status }
                }
                return el;
            })

        default:
            return tasks;
    }
}

export default tasksReducer;
