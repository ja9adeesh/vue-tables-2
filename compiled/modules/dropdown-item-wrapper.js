'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, _ref, item) {
  var framework = _ref.framework;

  if (framework === 'bulma') {
    return item;
  }

  return h(
    'li',
    null,
    [item]
  );
};

module.exports = exports['default'];