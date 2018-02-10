'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (classes) {
    var cols = _this.columns.map(function (column) {
      return (0, _dropdownItemWrapper2.default)(h, classes, h(
        'a',
        { 'class': classes.dropdown.item, attrs: { href: '#' }
        },
        [h('input', {
          attrs: {
            type: 'checkbox',

            disabled: _this._onlyColumn(column)
          },
          domProps: {
            'value': column,
            'checked': _this.allColumns.includes(column)
          },
          on: {
            'change': _this.toggleColumn.bind(_this, column)
          }
        }), ' ', _this.getHeading(column)]
      ));
    });

    return h(
      'div',
      {
        'class': classes.dropdown.container + ' ' + classes.right + ' vue-table-columns-dropdown' },
      [h(
        'button',
        {
          attrs: {
            type: 'button'
          },
          'class': classes.button + ' ' + classes.dropdown.trigger,
          on: {
            'click': _this._toggleColumnsDropdown.bind(_this)
          }
        },
        [_this.display('columns'), h(
          'span',
          { 'class': classes.icon + ' ' + classes.small },
          [h('i', { 'class': classes.dropdown.caret })]
        )]
      ), _dropdownWrapper2.default.call(_this, h, classes, cols)]
    );
  };
};

var _dropdownWrapper = require('./dropdown-wrapper');

var _dropdownWrapper2 = _interopRequireDefault(_dropdownWrapper);

var _dropdownItemWrapper = require('./dropdown-item-wrapper');

var _dropdownItemWrapper2 = _interopRequireDefault(_dropdownItemWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];