/**
 * Checks if all elements in an array are present in a Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of elements to check for in the Set.
 * @returns {boolean} - Returns true if all elements in the array are found in the Set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
    return array.every(element => set.has(element));
}
