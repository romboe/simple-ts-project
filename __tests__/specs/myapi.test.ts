import myapi = require('../../src/myapi');

test('2 + 2 = 4', () => {
    expect(myapi.sum(2,2)).toBe(4);
});