import {generateRandom, NameItem} from '../tools/generator';
import * as Immutable from 'immutable';

export const enum ActionsTypes {
    GENERATE,
    CHANGE_COUNT
};

export interface GenerateClickActionInterface {
    type: ActionsTypes;
};

export const generateClick = (): GenerateClickActionInterface => {
    return {
        type: ActionsTypes.GENERATE
    };
};

export const changeCount = (count: number) => {
    return {
        type: ActionsTypes.CHANGE_COUNT,
        count
    };
};

function defaultState() {
    return Immutable.Map<string, any>({
        count: 5,
        list: generateRandom(5)
    });
}

const reducer = (
        state: Immutable.Map<string, any> = defaultState(),
        action
    ): Immutable.Map<string, any> => {

    switch (action.type) {
        case ActionsTypes.GENERATE:
            return state.set('list', generateRandom(state.get('count')));

        case ActionsTypes.CHANGE_COUNT:
            return state.set('count', action.count);
    }

    return state;
};

export default reducer;
