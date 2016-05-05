import * as Actions from './people';
import {createStore} from 'store';

const STORE_ID = 'people';

const getState = (store) =>
    store.getState()[STORE_ID];

describe('Actions', () => {
    let store;

    beforeEach(() => {
        store = createStore();
    });

    it('Should work changeCount', () => {
        store.dispatch(Actions.changeCount(10));
        expect(getState(store).get('count')).toBe(10);
    });

    it('Should work generateClick', () => {
        store.dispatch(Actions.generateClick());

        let list1 = getState(store).get('list');

        store.dispatch(Actions.generateClick());

        let list2 = getState(store).get('list');

        expect(list1).toEqual(jasmine.any(Array));
        expect(list2).toEqual(jasmine.any(Array));
        expect(list1).not.toBe(list2);

    });
});
