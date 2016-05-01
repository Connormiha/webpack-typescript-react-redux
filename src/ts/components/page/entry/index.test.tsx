import * as View from './index';
import * as React from 'react';
import * as ReactTestUtils from 'react-addons-test-utils';
import {NameItem} from 'tools/generator';

describe('Views tests', () => {
    it('Test App Component', () => {
        const view: React.Component<any, any> = ReactTestUtils.renderIntoDocument(
          <View.App><div className="test"></div></View.App>
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'test');
        expect(elements.length).toBe(1);
    });

    it('Test GeneratorApp Component', () => {
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
