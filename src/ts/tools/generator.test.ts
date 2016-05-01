import {generateRandom, NameItem} from './generator';

describe('Generator test', () => {
    it('Should be Array', () => {
        let result: Array<NameItem> = generateRandom(5);

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
    });
});
