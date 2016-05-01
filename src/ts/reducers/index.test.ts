import reducer from './index';

describe('Root reducer', () => {
    it('Should return valid state', () => {
        const result = reducer({}, {});

        expect(result.people).toBeTruthy();
    });
});
