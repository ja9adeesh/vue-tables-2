'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  var customQueries = {};

  var init = this.opts.initFilters;
  var key = void 0;

  this.opts.customFilters.forEach(function (filter) {
    key = _this.source === 'client' ? filter.name : filter;

    customQueries[key] = init.hasOwnProperty(key) ? init[key] : '';
  });

  return customQueries;
};

module.exports = exports['default'];