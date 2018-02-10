'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (data, e) {
  var _this = this;

  var value = void 0;

  if (e) {
    var _query = this.query;

    this.setPage(1, true);

    var name = this.getName(e.target.name);
    value = _typeof(e.target.value) === 'object' ? e.target.value : '' + e.target.value;

    if (name) {
      _query[name] = value;
    } else {
      _query = value;
    }

    if (this.vuex) {
      this.commit('SET_FILTER', _query);
    } else {
      this.query = _query;
    }

    this.updateState('query', _query);

    if (name) {
      this.dispatch('filter', { name: name, value: value });
      this.dispatch('filter::' + name, value);
    } else {
      this.dispatch('filter', value);
    }
  }

  var query = this.query;

  var totalQueries = !query ? 0 : 1;

  if (!this.opts) {
    return data;
  }

  if (this.opts.filterByColumn) {
    totalQueries = (0, _objectFilledKeysCount2.default)(query);
  }

  var found = void 0;
  var currentQuery = void 0;
  var dateFormat = this.opts.dateFormat;
  var filterByDate = void 0;
  var isListFilter = void 0;

  var dataFiltered = (0, _customFilters2.default)(data, this.opts.customFilters, this.customQueries);

  if (!totalQueries) {
    return dataFiltered;
  }

  // eslint-disable-next-line no-unused-vars
  return dataFiltered.filter(function (row, index) {
    found = 0;

    _this.filterableColumns.forEach(function (column) {
      filterByDate = _this.opts.dateColumns.includes(column) && _this.opts.filterByColumn;
      isListFilter = _this.isListFilter(column) && _this.opts.filterByColumn;

      value = getValue(row[column], filterByDate, dateFormat);

      currentQuery = _this.opts.filterByColumn ? query[column] : query;

      currentQuery = setCurrentQuery(currentQuery);

      if (currentQuery && foundMatch(currentQuery, value, isListFilter)) {
        found++;
      }
    });

    return found >= totalQueries;
  });
};

var _objectFilledKeysCount = require('../helpers/object-filled-keys-count');

var _objectFilledKeysCount2 = _interopRequireDefault(_objectFilledKeysCount);

var _isValidMomentObject = require('../helpers/is-valid-moment-object');

var _isValidMomentObject2 = _interopRequireDefault(_isValidMomentObject);

var _customFilters = require('../filters/custom-filters');

var _customFilters2 = _interopRequireDefault(_customFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCurrentQuery(query) {
  if (!query) {
    return '';
  }

  if (typeof query === 'string') {
    return query.toLowerCase();
  }

  // Date Range

  return query;
}

function foundMatch(query, value, isListFilter) {
  if (['string', 'number'].includes(typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
    value = String(value).toLowerCase();
  }

  // List Filter
  if (isListFilter) {
    return value === query;
  }

  // Text Filter
  if (typeof value === 'string') {
    return value.includes(query);
  }

  // Date range
  var start = void 0;
  var end = void 0;

  if ((0, _isValidMomentObject2.default)(value)) {
    start = window.moment(query.start, 'YYYY-MM-DD HH:mm:ss');
    end = window.moment(query.end, 'YYYY-MM-DD HH:mm:ss');

    return value >= start && value <= end;
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    for (var key in value) {
      if (foundMatch(query, value[key])) {
        return true;
      }
    }

    return false;
  }

  return value >= start && value <= end;
}

function getValue(val, filterByDate, dateFormat) {
  if ((0, _isValidMomentObject2.default)(val)) {
    if (filterByDate) {
      return val;
    }
    return val.format(dateFormat);
  }

  return val;
}
module.exports = exports['default'];