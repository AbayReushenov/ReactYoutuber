import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import initState from './initState';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, initState, composeWithDevTools())


export default store;