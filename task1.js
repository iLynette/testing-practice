const stringLength = (string) => {
    if (string.length === 0 || string.length > 10) {
        throw new Error ('not valid')
    }
    return string.length;
}

module.exports = stringLength