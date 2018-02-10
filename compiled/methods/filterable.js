'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  if (!this.opts.filterable) {
    return false;
  }

  return typeof this.opts.filterable === 'boolean' && this.opts.filterable || this.opts.filterable.includes(column);
};

module.exports = exports['default'];