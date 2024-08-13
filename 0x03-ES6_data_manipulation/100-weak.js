// Create and export a WeakMap instance to track the number of API queries
export const weakMap = new WeakMap();

/**
 * Tracks the number of times an API endpoint is queried.
 * @param {{
 *   protocol: String,
 *   name: String
 * }} endpoint - The API endpoint object containing protocol and name.
 * @throws Will throw an error if the number of queries for the endpoint is 5 or more.
 */
export function queryAPI(endpoint) {
    // Check if the endpoint is already in the WeakMap
    if (weakMap.has(endpoint)) {
        const count = weakMap.get(endpoint); // Get the current count
        if (count >= 4) { // If the count is 4, the next increment will make it 5
            throw new Error('Endpoint load is high'); // Throw an error if the limit is reached
        }
        weakMap.set(endpoint, count + 1); // Increment the count
    } else {
        weakMap.set(endpoint, 1); // If it's the first time, set the count to 1
    }
}
