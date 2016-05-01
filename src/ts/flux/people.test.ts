import {generateClick, GenerateClickActionInterface, ActionsTypes} from './people';

describe('Actions', () => {
    it('Should return action object', function () {
        const result: GenerateClickActionInterface = generateClick(10);

        expect(result.type).toBe(ActionsTypes.GENERATE);
        expect(result.count).toBe(10);
    });
});
