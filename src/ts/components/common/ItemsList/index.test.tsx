import View, {ItemListPropsInterface} from './index';
import * as React from 'react';
import {render, CheerioWrapper} from 'enzyme';
import {NameItem} from 'tools/generator';

describe('Views tests', () => {
    it('Test ItemsList Component', () => {
        const items: Array<NameItem> = [{
          id: 1,
          job: 'Programmer',
          name: 'Ivan'
        }];

        const view: CheerioWrapper<any, any> = render(
          <View items={items} />
        );

        expect(view.find('.items-list').length).toBe(1);
        expect(view.find('.items-list .item__text').length).toBe(1);
        expect(view.find('.items-list .item__text').html()).toBe('Ivan <i>Programmer</i>');
    });
});
