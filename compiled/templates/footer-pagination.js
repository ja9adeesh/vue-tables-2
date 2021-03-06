'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, modules, classes, slots) {
  var filterId = 'vue-table-search_' + this.id;
  var perpageId = 'vue-table-limit_' + this.id;
  var perpageValues = _perPageValues2.default.call(this, h);

  var genericFilter = this.opts.filterByColumn || !this.opts.filterable ? '' : h(
    'div',
    { 'class': 'vue-table-search-field' },
    [h(
      'label',
      {
        attrs: { 'for': filterId },
        'class': classes.label },
      [this.display('filter')]
    ), modules.normalFilter(classes, filterId)]
  );

  var perpage = perpageValues.length > 1 ? h(
    'div',
    { 'class': 'vue-table-limit-field' },
    [h(
      'label',
      { 'class': classes.label, attrs: { 'for': perpageId }
      },
      [this.display('limit')]
    ), modules.perPage(perpageValues, classes.select, perpageId)]
  ) : '';

  var columnsDropdown = this.opts.columnsDropdown ? h(
    'div',
    { 'class': 'vue-table-columns-dropdown-wrapper' },
    [modules.columnsDropdown(classes)]
  ) : '';

  return h(
    'div',
    { 'class': 'vue-table vue-table--' + this.source },
    [h(
      'div',
      { 'class': classes.row },
      [h(
        'div',
        { 'class': classes.column },
        [h(
          'div',
          {
            'class': classes.field + ' ' + classes.inline + ' ' + classes.left + ' vue-table-search' },
          [slots.beforeFilter, genericFilter, slots.afterFilter]
        ), h(
          'div',
          {
            'class': classes.field + ' ' + classes.inline + ' ' + classes.right + ' vue-table-limit' },
          [slots.beforeLimit, perpage, slots.afterLimit]
        ), columnsDropdown]
      )]
    ), slots.beforeTable, h(
      'div',
      { 'class': 'table-responsive' },
      [h(
        'table',
        {
          'class': 'vue-table-table ' + (this.opts.skin ? this.opts.skin : classes.table) },
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [modules.headings(classes.right)]
          ), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]
        ), h(
          'tfoot',
          null,
          [h(
            'tr',
            null,
            [h(
              'td',
              {
                attrs: { colspan: this.colspan }
              },
              [modules.pagination((0, _merge2.default)(classes.pagination, {
                list: classes.pagination.list + ' ' + classes.right + ' ' + classes.nomargin,
                count: '' + classes.left
              }))]
            )]
          )]
        ), slots.beforeBody, h(
          'tbody',
          null,
          [slots.prependBody, modules.rows(classes), slots.appendBody]
        ), slots.afterBody]
      )]
    )]
  );
};

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _perPageValues = require('../modules/per-page-values');

var _perPageValues2 = _interopRequireDefault(_perPageValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];