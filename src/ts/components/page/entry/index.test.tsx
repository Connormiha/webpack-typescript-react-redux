import * as View from './index';
import * as React from 'react';
import {render, CheerioWrapper} from 'enzyme';
import {NameItem} from 'tools/generator';
import * as Immutable from 'immutable';

describe('Views tests', () => {
    it('Test App Component', () => {
        const view: CheerioWrapper<any, any> = render(
          <View.App><div className="test"></div></View.App>
        );

        expect(view.find('.test').length).toBe(1);
    });

    it('Test GeneratorApp Component', () => {
        const FAKE_STORE = {
            dispatch() {
                //pass
            },

            getState() {
                return {
                    people: Immutable.Map<string, any>({
                        list: []
                    })
                };
            },

            subscribe() {
                //pass
            }
        };

        // spyOn(FAKE_STORE, 'subscribe');

        const view: CheerioWrapper<any, {}> = render(
          <View.GeneratorApp store={FAKE_STORE} />
        );

        expect(view.find('a').length).toBe(1);
        // expect(FAKE_STORE.subscribe).toHaveBeenCalled();
    });
});
