import createStore from "./createStore";

describe('createStore', () => {
    it('should return empty object', () => {
        expect(createStore()).toEqual({});
    });
});
