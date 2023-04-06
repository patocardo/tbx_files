/**
 * Returns the object in the array with the most attributes.
 * If an object has 'text', 'number', and 'hex' attributes, that object is returned immediately.
 * Otherwise, the object with the most attributes is returned.
 * If multiple objects have the same number of attributes, the first one encountered is returned.
 *
 * @param {Array} arr - An array of objects to search through.
 * @returns {Object|null} The object with the most attributes, or null if the array is empty.
 */
const findBestLine = (arr) => {
  let bestLine = null;

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    if ('text' in obj && 'number' in obj && 'hex' in obj) {
      return obj;
    }

    if (bestLine === null || Object.keys(obj).length > Object.keys(bestLine).length) {
      bestLine = obj;
    }
  }

  return bestLine || {};
}

export default findBestLine;