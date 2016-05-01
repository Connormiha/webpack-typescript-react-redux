import View, {ItemListPropsInterface} from './index';
import * as React from 'react';
import * as ReactTestUtils from 'react-addons-test-utils';
import {NameItem} from 'tools/generator';

describe('Views tests', () => {
    it('Test ItemsList Component', () => {
        const items: Array<NameItem> = [{
          id: 1,
          job: 'Programmer',
          name: 'Ivan'
        }];

        const view: React.Component<ItemListPropsInterface, {}> = ReactTestUtils.renderIntoDocument(
          <View items={items} />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'items-list');
        expect(elements.length).toBe(1);
        expect(elements[0].querySelectorAll('.item__text').length).toBe(1);
        expect(elements[0].querySelector('.item__text').textContent).toBe('Ivan Programmer');
    });
});
