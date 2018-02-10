'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (filter) {
  if (!this.opts.filterable) {
    console.warn('vue-tables-2: Unable to set filter. Filtering is disabled (filterable: false)');
    return;
  }

  if (this.opts.filterByColumn && typeof filter === 'string') {
    console.warn('vue-tables-2: Unable to set filter. Filter value must be an object (`filterByCol' + 'umn` is set to `true`)');
    return;
  }

  if (!this.opts.filterByColumn && typeof filter !== 'string') {
    console.warn('vue-tables-2: Unable to set filter. Filter value must be a string (`filterByColu' + 'mn` is set to `false`)');
    return;
  }

  var mergedFilter = this.opts.filterByColumn ? (0, _merge2.default)(this.query, filter) : filter;

  if (this.vuex) {
    this.commit('SET_FILTER', mergedFilter);
  } else {
    this.query = mergedFilter;
    this.setPage(1, true);
  }

  this.updateState('query', mergedFilter);

  this._setFiltersDOM(filter);

  if (this.source === 'server') {
    this.getData();
  }
};

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];