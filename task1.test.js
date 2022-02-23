const stringLength = require('./task1');

describe ('my tests', () => {
    test('string length is equal to 10', () => {
        expect(stringLength('lynettealu')).toBe(10)
    })

    test('string length is valid', () => {
        expect(() => stringLength('lynetteacholah')).toThrowError()
        expect(() => stringLength('')).toThrowError()
    })
})