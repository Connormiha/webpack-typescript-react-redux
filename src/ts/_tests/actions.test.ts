'use strict';

import {GenerateClick, GenerateClickActionInterface} from '../actions';

describe('Actions', function () {
    it('Should return action object', function () {
        const result: GenerateClickActionInterface = GenerateClick(10);

        expect(result.type).toBe('GENERATE_CLICK');
        expect(result.count).toBe(10);
    });
});
