/**
 * This package uses duck architecture
 * @see https://github.com/erikras/ducks-modular-redux
 */

import {combineReducers} from 'redux';
import people from '../flux/people';

const rootReducer = combineReducers({
    people
});

export default rootReducer;
