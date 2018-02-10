'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  var sortAll = typeof this.opts.sortable === 'boolean' && this.opts.sortable;

  if (sortAll) {
    return true;
  }

  return this.opts.sortable.includes(column);
};

module.exports = exports['default'];