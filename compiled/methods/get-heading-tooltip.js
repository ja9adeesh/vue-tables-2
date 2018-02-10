'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, h) {
  if (typeof value !== 'string') {
    return '';
  }

  var derivedHeadingTooltip = '';

  if (!this.opts.headingsTooltips.hasOwnProperty(value)) {
    return derivedHeadingTooltip;
  }

  if (typeof this.opts.headingsTooltips[value] === 'function') {
    if (h) {
      return this.opts.headingsTooltips[value].call(this.$parent, h);
    }

    return derivedHeadingTooltip;
  }

  return this.opts.headingsTooltips[value];
};

module.exports = exports['default'];