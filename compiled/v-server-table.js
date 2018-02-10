'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _data2 = require('./state/data');

var _data3 = _interopRequireDefault(_data2);

var _vuex = require('./state/vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = require('./state/normal');

var _normal2 = _interopRequireDefault(_normal);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _vuePagination = require('vue-pagination-2');

var _data4 = require('./mixins/data');

var _data5 = _interopRequireDefault(_data4);

var _created2 = require('./mixins/created');

var _created3 = _interopRequireDefault(_created2);

var _templateCompiler = require('./template-compiler');

var _templateCompiler2 = _interopRequireDefault(_templateCompiler);

var _refresh = require('./methods/refresh');

var _refresh2 = _interopRequireDefault(_refresh);

var _getData = require('./methods/get-data');

var _getData2 = _interopRequireDefault(_getData);

var _setData = require('./methods/set-data');

var _setData2 = _interopRequireDefault(_setData);

var _serverSearch = require('./methods/server-search');

var _serverSearch2 = _interopRequireDefault(_serverSearch);

var _registerServerFilters = require('./methods/register-server-filters');

var _registerServerFilters2 = _interopRequireDefault(_registerServerFilters);

var _totalPages = require('./computed/total-pages');

var _totalPages2 = _interopRequireDefault(_totalPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: install
};


function install(Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bootstrap3';
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';

  var globalState = useVuex ? (0, _vuex2.default)('server') : (0, _normal2.default)();

  var server = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'server-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: _templateCompiler2.default.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
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
      var _this = this;

      (0, _created3.default)(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      this.loadState();

      this.getData(true).then(function (response) {
        _this.setData(response);

        _this.loading = false;

        if (_this.hasDateFilters()) {
          setTimeout(function () {
            _this.initDateFilters();
          }, 0);
        }
      });
    },
    mounted: function mounted() {
      var _this2 = this;

      if (this.opts.saveState) {
        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.hasDateFilters) {
          this.opts.dateColumns.forEach(function (column) {
            return _this2._setDateFilterText(column, state.query[column]);
          });
        }
      }

      if (this.vuex) {
        return;
      }

      this.registerServerFilters();

      if (this.options.initialPage) {
        this.setPage(this.options.initialPage, true);
      }
    },
    data: function data() {
      return _merge2.default.recursive((0, _data5.default)(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions
      }, (0, _data3.default)(useVuex, 'server', this.options.initialPage));
    },

    methods: {
      refresh: _refresh2.default,
      getData: _getData2.default,
      setData: _setData2.default,
      serverSearch: _serverSearch2.default,
      registerServerFilters: _registerServerFilters2.default,
      loadState: function loadState() {
        var _this3 = this;

        if (!this.opts.saveState) {
          return;
        }

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.vuex) {
          this.commit('SET_STATE', {
            query: state.query,
            customQueries: state.customQueries,
            page: state.page,
            limit: state.perPage,
            orderBy: state.orderBy
          });
        } else {
          this.page = state.page;
          this.query = state.query;
          this.customQueries = state.customQueries;
          this.limit = state.perPage;
          this.orderBy = state.orderBy;
        }

        if (!this.opts.pagination.dropdown) {
          setTimeout(function () {
            _this3.$refs.pagination.Page = state.page;
          }, 0);
        }

        this.activeState = true;
      }
    },
    computed: {
      totalPages: _totalPages2.default,
      hasMultiSort: function hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }

  }, globalState);

  Vue.component('v-server-table', server);

  return server;
}
module.exports = exports['default'];