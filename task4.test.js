const capitalizeString = require('./task4');

test('check if string is capitalized', () => {
    expect(capitalizeString('lynette')).toBe('Lynette');
})