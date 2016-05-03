import {generateClick, GenerateClickActionInterface, ActionsTypes} from './people';

describe('Actions', () => {
    it('Should return action object', function () {
        const result: GenerateClickActionInterface = generateClick();

        expect(result.type).toBe(ActionsTypes.GENERATE);
    });
});
