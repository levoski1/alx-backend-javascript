/**
 * Updates the quantity of items in a map.
 * If the quantity is 1, updates it to 100.
 * Throws an error if the argument is not a map.
 *
 * @param {Map<string, number>} itemsMap - The map containing items and their quantities.
 * @returns {Map<string, number>} The updated map with quantities set to 100 where the initial quantity was 1.
 * @throws {Error} If the argument is not a map.
 */
export default function updateUniqueItems(itemsMap) {
    if (!(itemsMap instanceof Map)) {
        throw new Error('Cannot process');
    }

    itemsMap.forEach((value, key) => {
        if (value === 1) {
            itemsMap.set(key, 100);
        }
    });

    return itemsMap;
}
