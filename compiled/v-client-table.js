'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuePagination = require('vue-pagination-2');

var _vuex = require('./state/vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = require('./state/normal');

var _normal2 = _interopRequireDefault(_normal);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _data2 = require('./state/data');

var _data3 = _interopRequireDefault(_data2);

var _data4 = require('./mixins/data');

var _data5 = _interopRequireDefault(_data4);

var _created2 = require('./mixins/created');

var _created3 = _interopRequireDefault(_created2);

var _templateCompiler = require('./template-compiler');

var _templateCompiler2 = _interopRequireDefault(_templateCompiler);

var _q = require('./computed/q');

var _q2 = _interopRequireDefault(_q);

var _customQ = require('./computed/custom-q');

var _customQ2 = _interopRequireDefault(_customQ);

var _totalPages = require('./computed/total-pages');

var _totalPages2 = _interopRequireDefault(_totalPages);

var _filteredData = require('./computed/filtered-data');

var _filteredData2 = _interopRequireDefault(_filteredData);

var _setCount = require('./filters/set-count');

var _setCount2 = _interopRequireDefault(_setCount);

var _date = require('./filters/date');

var _date2 = _interopRequireDefault(_date);

var _transformDateStringsToMoment = require('./methods/transform-date-strings-to-moment');

var _transformDateStringsToMoment2 = _interopRequireDefault(_transformDateStringsToMoment);

var _registerClientFilters = require('./methods/register-client-filters');

var _registerClientFilters2 = _interopRequireDefault(_registerClientFilters);

var _clientSearch = require('./methods/client-search');

var _clientSearch2 = _interopRequireDefault(_clientSearch);

var _defaultSort = require('./methods/default-sort');

var _defaultSort2 = _interopRequireDefault(_defaultSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: install
};


function install(Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bootstrap3';
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';

  var client = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'client-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: _templateCompiler2.default.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      }
    },

    created: function created() {
      (0, _created3.default)(this);

      if (!this.vuex) {
        this.initOrderBy();

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();
      }
    },
    mounted: function mounted() {
      if (this.hasDateFilters()) {
        this.initDateFilters();
      }

      if (this.opts.toMomentFormat) {
        this.transformDateStringsToMoment();
      }

      if (!this.vuex) {
        this.registerClientFilters();

        if (this.options.initialPage) {
          this.setPage(this.options.initialPage);
        }
      }

      if (this.opts.groupBy && !this.opts.orderBy) {
        this.orderBy.column = this.opts.groupBy;
      }

      this.loadState();
    },
    data: function data() {
      return _merge2.default.recursive((0, _data5.default)(), {
        source: 'client',
        globalOptions: globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data3.default)(useVuex, 'client', this.options.initialPage));
    },

    computed: {
      q: _q2.default,
      customQ: _customQ2.default,
      totalPages: _totalPages2.default,
      filteredData: _filteredData2.default,
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },

    filters: {
      setCount: _setCount2.default,
      date: _date2.default
    },

    methods: {
      transformDateStringsToMoment: _transformDateStringsToMoment2.default,
      registerClientFilters: _registerClientFilters2.default,
      search: _clientSearch2.default,
      defaultSort: _defaultSort2.default,
      loadState: function loadState() {
        if (!this.opts.saveState) {
          return;
        }

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.opts.filterable) {
          this.setFilter(state.query);
        }

        this.setOrder(state.orderBy.column, state.orderBy.ascending);

        if (this.vuex) {
          this.commit('SET_LIMIT', state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);

        this.activeState = true;

        // TODO: Custom Queries
      }
    }

  });

  var state = useVuex ? (0, _vuex2.default)() : (0, _normal2.default)();

  client = _merge2.default.recursive(client, state);

  Vue.component('v-client-table', client);

  return client;
}
module.exports = exports['default'];