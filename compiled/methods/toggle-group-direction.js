"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (this.orderBy.column !== this.opts.groupBy) {
    this.setOrder(this.opts.groupBy, true);
  } else {
    this.setOrder(this.opts.groupBy, !this.orderBy.ascending);
  }
};

module.exports = exports["default"];