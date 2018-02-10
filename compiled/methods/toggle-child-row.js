"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rowId, e) {
  if (e) {
    e.stopPropagation();
  }

  if (this.openChildRows.includes(rowId)) {
    var index = this.openChildRows.indexOf(rowId);
    this.openChildRows.splice(index, 1);
  } else {
    this.openChildRows.push(rowId);
  }
};

module.exports = exports["default"];