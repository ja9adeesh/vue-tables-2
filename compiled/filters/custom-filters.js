"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data, customFilters, customQueries) {
  var passing = void 0;

  return data.filter(function (row) {
    passing = true;

    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) {
        passing = false;
      }
    });

    return passing;
  });
};

module.exports = exports["default"];