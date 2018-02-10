'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bootstrap = require('./themes/bootstrap3');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _bootstrap3 = require('./themes/bootstrap4');

var _bootstrap4 = _interopRequireDefault(_bootstrap3);

var _bulma = require('./themes/bulma');

var _bulma2 = _interopRequireDefault(_bulma);

var _default = require('./templates/default');

var _default2 = _interopRequireDefault(_default);

var _footerPagination = require('./templates/footer-pagination');

var _footerPagination2 = _interopRequireDefault(_footerPagination);

var _rows = require('./modules/rows');

var _rows2 = _interopRequireDefault(_rows);

var _normalFilter = require('./modules/normal-filter');

var _normalFilter2 = _interopRequireDefault(_normalFilter);

var _dropdownPagination = require('./modules/dropdown-pagination');

var _dropdownPagination2 = _interopRequireDefault(_dropdownPagination);

var _dropdownPaginationCount = require('./modules/dropdown-pagination-count');

var _dropdownPaginationCount2 = _interopRequireDefault(_dropdownPaginationCount);

var _columnFilters = require('./modules/column-filters');

var _columnFilters2 = _interopRequireDefault(_columnFilters);

var _pagination = require('./modules/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _headings = require('./modules/headings');

var _headings2 = _interopRequireDefault(_headings);

var _perPage = require('./modules/per-page');

var _perPage2 = _interopRequireDefault(_perPage);

var _columnsDropdown = require('./modules/columns-dropdown');

var _columnsDropdown2 = _interopRequireDefault(_columnsDropdown);

var _slots = require('./slots');

var _slots2 = _interopRequireDefault(_slots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (template, theme) {
  var themes = {
    bootstrap3: (0, _bootstrap2.default)(),
    bootstrap4: (0, _bootstrap4.default)(),
    bulma: (0, _bulma2.default)()
  };

  var templates = {
    default: _default2.default,
    footerPagination: _footerPagination2.default
  };

  return function (h) {
    var modules = {
      rows: _rows2.default.call(this, h),
      normalFilter: _normalFilter2.default.call(this, h),
      dropdownPagination: _dropdownPagination2.default.call(this, h),
      dropdownPaginationCount: _dropdownPaginationCount2.default.call(this, h),
      columnFilters: _columnFilters2.default.call(this, h),
      pagination: _pagination2.default.call(this, h),
      headings: _headings2.default.call(this, h),
      perPage: _perPage2.default.call(this, h),
      columnsDropdown: _columnsDropdown2.default.call(this, h)
    };

    if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {
      throw 'vue-tables-2: Template "' + template + '" does not exist';
    }

    if (typeof theme === 'string' && (!themes[theme] || _typeof(themes[theme]) !== 'object')) {
      throw 'vue-tables-2: Theme "' + theme + '" does not exist';
    }

    var tpl = typeof template === 'string' ? templates[template] : template;
    var thm = typeof theme === 'string' ? themes[theme] : theme();
    var slots = _slots2.default.call(this);

    return tpl.call(this, h, modules, thm, slots);
  };
};

module.exports = exports['default'];