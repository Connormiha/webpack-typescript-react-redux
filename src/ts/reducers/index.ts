import { combineReducers } from 'redux';
import {generateRandom, NameItem} from '../generator';

const people = (state: Array<NameItem> = generateRandom(5), action): Array<NameItem> => {
    switch (action.type) {
        case 'GENERATE_CLICK':
            return generateRandom(action.count);
    }

    return state;
};

const sometest = (state = [], action) => {
    console.log('sometest');
    return state;
};

const rootReducer = combineReducers({
  people,
  sometest
});

export default rootReducer;
