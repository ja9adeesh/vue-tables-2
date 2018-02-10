"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  var userMultiSort = Object.keys(this.userMultiSorting);

  if (!userMultiSort.length || this.orderBy.column === column) {
    return this.orderBy.column === column;
  }

  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {
    return col.column == column;
  }).length;
};

module.exports = exports["default"];