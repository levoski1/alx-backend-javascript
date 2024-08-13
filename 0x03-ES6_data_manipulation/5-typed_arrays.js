/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position in the ArrayBuffer to set the Int8 value.
 * @param {Number} value - The Int8 value to set at the specified position.
 * @returns {ArrayBuffer} - The created ArrayBuffer with the specified Int8 value.
 * @throws {Error} - If the position is outside the range of the ArrayBuffer.
 */
function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);

    const int8View = new Int8Array(buffer);

    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    int8View[position] = value;

    return buffer;
}

export default createInt8TypedArray;
