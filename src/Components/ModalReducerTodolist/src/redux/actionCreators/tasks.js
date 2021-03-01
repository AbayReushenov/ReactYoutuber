import * as TYPES from '../types/task';


export function addNewTask(text) {
    return {
        type: TYPES.ADD_TASK,
        data: {
            text,
            id: Date.now(),
            status: false
        }
    }
}

export function changeStatus(id) {
    return {
        type: TYPES.CHANGE_STATUS,
        data: id
    }
}


export function deleteTask(id) {
    return {
        type: TYPES.DELETE_TASK,
        data: id
    }
}