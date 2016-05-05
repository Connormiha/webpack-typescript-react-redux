import {createStore as reduxCreateStore} from 'redux';
import rootReducer from './reducers';

export const createStore = () =>
    reduxCreateStore(rootReducer);

export default createStore();
