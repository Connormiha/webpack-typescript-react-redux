import View from './index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';

describe('Views tests', () => {
    it('Test About Component', () => {
        const view: React.Component<any, {}> = ReactTestUtils.renderIntoDocument(
          <View />
        );

        const elements: Array<Element> = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'list');
        expect(elements.length).toBe(1);
    });
});
