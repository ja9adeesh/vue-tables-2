'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listColumnsObject = require('../computed/list-columns-object');

var _listColumnsObject2 = _interopRequireDefault(_listColumnsObject);

var _allColumns = require('../computed/all-columns');

var _allColumns2 = _interopRequireDefault(_allColumns);

var _templatesKeys = require('../computed/templates-keys');

var _templatesKeys2 = _interopRequireDefault(_templatesKeys);

var _opts = require('../computed/opts');

var _opts2 = _interopRequireDefault(_opts);

var _tableData = require('../computed/table-data');

var _tableData2 = _interopRequireDefault(_tableData);

var _storage = require('../computed/storage');

var _storage2 = _interopRequireDefault(_storage);

var _filterableColumns = require('../computed/filterable-columns');

var _filterableColumns2 = _interopRequireDefault(_filterableColumns);

var _hasChildRow = require('../computed/has-child-row');

var _hasChildRow2 = _interopRequireDefault(_hasChildRow);

var _colspan = require('../computed/colspan');

var _colspan2 = _interopRequireDefault(_colspan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  listColumnsObject: _listColumnsObject2.default,
  allColumns: _allColumns2.default,
  templatesKeys: _templatesKeys2.default,
  opts: _opts2.default,
  tableData: _tableData2.default,
  storage: _storage2.default,
  filterableColumns: _filterableColumns2.default,
  hasChildRow: _hasChildRow2.default,
  colspan: _colspan2.default,
  stateKey: function stateKey() {
    var key = this.name ? this.name : this.id;
    return 'vuetables_' + key;
  },
  Page: function Page() {
    return this.page;
  }
};
module.exports = exports['default'];