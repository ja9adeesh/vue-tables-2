'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (page) {
  if (this.vuex) {
    return;
  }

  this.setPage(page);
  this.dispatch('pagination', page);
};

module.exports = exports['default'];