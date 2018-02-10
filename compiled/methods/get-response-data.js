'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  if (typeof axios !== 'undefined') {
    return response.data;
  }

  return response;
};

module.exports = exports['default'];