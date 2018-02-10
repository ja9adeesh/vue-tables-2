'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text, replacements) {
  if (!this.opts.texts) {
    return '';
  }

  var _text = this.opts.texts[text];

  if (replacements) {
    for (var key in replacements) {
      if (replacements.hasOwnProperty(key)) {
        // console.log(key)
        _text = text.replace('{' + key + '}', replacements[key]);
      }
    }
  }

  return _text;
};

module.exports = exports['default'];