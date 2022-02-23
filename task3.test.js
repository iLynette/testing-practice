const Calculator = require('./task3');

describe('testing math operations', () => {
    const calculator = new Calculator(4, 2);

    test('test add function', () => {
        expect(calculator.add(4, 2)).toBe(6);
    })

    test('test subtract function', () => {
        expect(calculator.subtract(4, 2)).toBe(2);
    })

    test('test divide function', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    })

    test('test multiply function', () => {
        expect(calculator.multiply(4, 2)).toBe(8);
    })
})