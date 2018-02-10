'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, inputClass) {
  var _this = this;

  var search = this.source === 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

  return function (column) {
    return h('input', {
      on: {
        'keyup': (0, _debounce2.default)(search, _this.opts.debounce)
      },

      'class': inputClass,
      attrs: { name: 'vf__' + column,
        type: 'text',
        placeholder: _this.display('filterBy', {
          column: _this.getHeading(column)
        })
      },
      domProps: {
        'value': _this.query[column]
      }
    });
  };
};

var _debounce = require('debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];