const reverseString = require('./task2')

test('check if string is reversed correctly', () => {
    expect(reverseString('lynette')).toMatch('ettenyl')
})