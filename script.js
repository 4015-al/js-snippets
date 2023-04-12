// check if a value is primitive
const isPrimitive = (x) => !["object", "function"].includes(typeof x);

// check if an element exists
const exists = (x) => x !== undefined && x !== null;

// check if an element exists, an array, and is not empty
const arrNotEmpty = (arr) => exists(arr) && Array.isArray(arr) && arr.length;

// return the last char of a str
const lastChar = (str) => str && str.length ? str[str.length-1] : undefined;

/**
 * map an object
 *
 * @param {Object} obj
 * @param {function} fn mapping function
 * @returns {Object} an object of the mapped elements
 *
 * @see https://stackoverflow.com/a/14810722/16953460
 */
const objectMap = (obj, fn) => Object.fromEntries(
  Object.entries(obj).map(
    ([k, v], i) => [k, fn(v, k, i)]
  )
)