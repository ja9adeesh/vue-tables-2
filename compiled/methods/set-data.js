'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  var _this = this;

  var data = this.opts.responseAdapter.call(this, response);

  this.data = this.applyFilters(data.data);
  this.count = parseInt(data.count, 10);

  setTimeout(function () {
    _this.dispatch('loaded', response);
  }, 0);
};

module.exports = exports['default'];