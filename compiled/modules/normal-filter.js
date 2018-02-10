'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (_ref, id) {
    var input = _ref.input,
        small = _ref.small;

    var search = _this.source === 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

    return h('input', {
      'class': input + ' ' + small,
      attrs: { type: 'text',

        placeholder: _this.display('filterPlaceholder'),

        id: id },
      domProps: {
        'value': _this.query
      },
      on: {
        'keyup': (0, _debounce2.default)(search, _this.opts.debounce)
      }
    });
  };
};

var _debounce = require('debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

// eslint-disable-next-line no-unused-vars