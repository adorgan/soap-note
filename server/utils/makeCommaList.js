/**
 * This makes a comma separated list of strings.
 * Ex. ["one", "two", "three"] -> "one, two, and three"
 *
 * @param {string[]} stringArray array of strings to be formatted as list
 * @returns {string} comma separated list of strings
 */
const makeList = (stringArray) => {
    let stringList = "";
    if (stringArray.length === 0) {
        return stringList;
    } else if (stringArray.length === 1) {
        stringList = stringArray[0];
    } else if (stringArray.length === 2) {
        stringList = `${stringArray[0]} and ${stringArray[1]}`;
    } else {
        const len = stringArray.length;
        for (let i = 0; i < len - 1; i++) {
            stringList += `${stringArray[i]}, `;
        }
        stringList += `and ${stringArray[len - 1]}`;
    }
    return stringList;
};

module.exports = makeList;
