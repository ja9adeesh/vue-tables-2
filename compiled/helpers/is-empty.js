"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj) {
  // null and undefined are "empty"
  // eslint-disable-next-line no-eq-null
  if (obj == null) {
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
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
};

module.exports = exports["default"];