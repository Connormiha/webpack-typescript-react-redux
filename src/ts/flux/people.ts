import {generateRandom, NameItem} from '../tools/generator';

export const enum ActionsTypes {
    GENERATE
};

export interface GenerateClickActionInterface {
    count: number;
    type: ActionsTypes;
};

export const generateClick = (count: number): GenerateClickActionInterface => {
    return {
        type: ActionsTypes.GENERATE,
        count
    };
};

const reducer = (state: Array<NameItem> = generateRandom(5), action): Array<NameItem> => {
    switch (action.type) {
        case ActionsTypes.GENERATE:
            return generateRandom(action.count);
    }

    return state;
};

export default reducer;
