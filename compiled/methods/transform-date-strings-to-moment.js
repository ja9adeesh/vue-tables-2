"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  this.data
  // eslint-disable-next-line no-unused-vars
  .forEach(function (row, index) {
    _this.opts.dateColumns.forEach(function (column) {
      row[column] = window.moment(row[column], _this.opts.toMomentFormat);
    });
  });
};

module.exports = exports["default"];