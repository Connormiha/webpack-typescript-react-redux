'use strict';

import {generateClick, GenerateClickActionInterface} from '../actions';

describe('Actions', function () {
    it('Should return action object', function () {
        const result: GenerateClickActionInterface = generateClick(10);

        expect(result.type).toBe('GENERATE_CLICK');
        expect(result.count).toBe(10);
    });
});
