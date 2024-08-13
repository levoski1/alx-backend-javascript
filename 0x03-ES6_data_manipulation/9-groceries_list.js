/**
 * Creates a map of grocery items with their quantities.
 *
 * @returns {Map<string, number>} A map containing grocery items as keys and their quantities as values.
 */
export default function groceriesList() {
    const grocerMap = new Map();
    grocerMap.set('Apples', 10);
    grocerMap.set('Tomatoes', 10);
    grocerMap.set('Pasta', 1);
    grocerMap.set('Rice', 1);
    grocerMap.set('Banana', 5);

    return grocerMap;
}
