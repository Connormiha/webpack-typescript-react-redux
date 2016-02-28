'use strict';

import * as View from '../view';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';
import {NameItem} from '../generator';

describe('Generator test', function () {
    it('Test ItemsList component', function () {
        const items: Array<NameItem> = [{
          id: 1,
          job: 'Programmer',
          name: 'Ivan'
        }];

        const view: React.Component<View.ItemListPropsInterface, {}> = ReactTestUtils.renderIntoDocument(
          <View.ItemsList items={items} />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'items-list');
        expect(elements.length).toBe(1);
        expect(elements[0].querySelectorAll('.item__text').length).toBe(1);
        expect(elements[0].querySelector('.item__text').textContent).toBe('Ivan Programmer');
    });
});
