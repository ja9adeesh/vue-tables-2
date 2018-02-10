"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  this.page = 1;

  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.setPage(1);
  }
};

module.exports = exports["default"];