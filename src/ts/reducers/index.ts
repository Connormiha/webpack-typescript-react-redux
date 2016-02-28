import { combineReducers } from 'redux';
import {generateRandom, NameItem} from '../generator';

const people = (state: Array<NameItem> = generateRandom(5), action): Array<NameItem> => {
    switch (action.type) {
        case 'GENERATE_CLICK':
            return generateRandom(action.count);
    }

    return state;
};

const rootReducer = combineReducers({
  people
});

export default rootReducer;
