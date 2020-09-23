import { createStore } from 'redux';
import { reducer } from './Reducer.js'

let store = createStore(reducer);
export default store;