'use strict';

import * as View from '../view';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';
import {NameItem} from '../generator';

describe('Views tests', function () {
    it('Test ItemsList Component', function () {
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

    it('Test App Component', function () {
        const view: React.Component<any, any> = ReactTestUtils.renderIntoDocument(
          <View.App><div className="test"></div></View.App>
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'test');
        expect(elements.length).toBe(1);
    });

    it('Test About Component', function () {
        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View.About />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'list');
        expect(elements.length).toBe(1);
    });

    it('Test GeneratorApp Component', function () {
        const FAKE_STORE = {
            dispatch: function () {
                //pass
            },

            getState: function () {
                return {
                    people: []
                };
            },

            subscribe: function () {
                //pass
            },
        };

        spyOn(FAKE_STORE, 'subscribe');

        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View.GeneratorApp store={FAKE_STORE} />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithTag(view, 'A');
        expect(elements.length).toBe(1);
        expect(FAKE_STORE.subscribe).toHaveBeenCalled();
    });
});
