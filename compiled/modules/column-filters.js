'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (_ref) {
    var input = _ref.input,
        select = _ref.select;

    if (!_this.opts.filterByColumn || !_this.opts.filterable) {
      return '';
    }

    var textFilter = _textFilter3.default.call(_this, h, input);
    var dateFilter = _dateFilter3.default.call(_this, h);
    var listFilter = _listFilter3.default.call(_this, h, select);

    var filters = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) {
      filters.push(h('th', null));
    }

    _this.allColumns.map(function (column) {
      var filter = '';

      if (_this.filterable(column)) {
        switch (true) {
          case _this.isTextFilter(column):
            filter = textFilter(column);
            break;
          case _this.isDateFilter(column):
            filter = dateFilter(column);
            break;
          case _this.isListFilter(column):
            filter = listFilter(column);
            break;
          default:
            break;
        }
      }

      if (typeof _this.$slots['filter__' + column] !== 'undefined') {
        filter = filter ? h(
          'div',
          null,
          [filter, _this.$slots['filter__' + column]]
        ) : _this.$slots['filter__' + column];
      }

      filters.push(h(
        'th',
        { 'class': _this.columnClass(column) },
        [h(
          'div',
          _defineProperty({
            'class': 'vue-table-column-filter'
          }, 'class', 'vue-table-' + column + '-filter-wrapper'),
          [filter]
        )]
      ));
    });

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) {
      filters.push(h('th', null));
    }

    return h(
      'tr',
      { 'class': 'vue-table-filters-row' },
      [filters]
    );
  };
};

var _textFilter2 = require('./text-filter');

var _textFilter3 = _interopRequireDefault(_textFilter2);

var _dateFilter2 = require('./date-filter');

var _dateFilter3 = _interopRequireDefault(_dateFilter2);

var _listFilter2 = require('./list-filter');

var _listFilter3 = _interopRequireDefault(_listFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];