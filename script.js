// check if a value is primitive
const isPrimitive = (x) => !["object", "function"].includes(typeof x);

// check if an element exist
const exists = (x) => x !== undefined && x !== null;

// check if an element is exist, an array, and not empty
const arrNotEmpty = (arr) => exists(arr) && Array.isArray(arr) && arr.length;