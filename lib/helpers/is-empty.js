export default obj => {
  // null and undefined are "empty"
  if (obj === null || obj === void 0) {
    return true;
  }

  // Assume if it has a length property with a non-zero value that that property
  // is correct.
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }

  // Otherwise, does it have any properties of its own?
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
};
