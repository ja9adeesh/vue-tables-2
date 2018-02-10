'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$refs.page.value;
  var preventRequest = arguments[1];

  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.Page = page;
  }

  this.page = page;

  this.updateState('page', page);

  if (this.source === 'server' && !preventRequest) {
    this.getData();
  }
};

module.exports = exports['default'];