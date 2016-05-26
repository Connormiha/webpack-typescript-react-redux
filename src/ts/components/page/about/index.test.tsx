import View from './index';
import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

describe('Views tests', () => {
    it('Test About Component', () => {
        const view: ShallowWrapper<any, {}> = shallow(
          <View />
        );

        expect(view.find('.list').length).toBe(1);
    });
});
