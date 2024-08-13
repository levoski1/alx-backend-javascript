/**
 * Returns a string of set values that start with a specific string, joined by a hyphen.
 * @param {Set} set - The set of values to be processed.
 * @param {String} startString - The string to check the beginning of each set value.
 * @returns {String} - A string of values from the set that start with the startString, without the startString, joined by hyphens.
 */
export default function cleanSet(set, startString) {
    if (!startString || startString.length === 0) {
        return '';
    }
    const resultArray = [];
    for (const value of set) {
        if (value.startsWith(startString)) {

            resultArray.push(value.slice(startString.length));
        }
    }
    return resultArray.join('-');
}
