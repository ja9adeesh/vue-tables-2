'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (source) {
  var extra = source === 'server' ? serverExtra() : clientExtra();

  return _merge2.default.recursive(true, {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      state: function state() {
        return this.$store.state[this.name];
      },
      Page: function Page() {
        return this.state.page;
      },
      count: function count() {
        return this.state.count;
      },
      Columns: function Columns() {
        return this.state.columns;
      },
      tableData: function tableData() {
        return this.state.data;
      },
      page: function page() {
        return this.state.page;
      },
      limit: function limit() {
        return this.state.limit;
      },
      customQueries: function customQueries() {
        return this.state.customQueries;
      },
      query: function query() {
        return this.state.query;
      },
      orderBy: function orderBy() {
        return { column: this.state.sortBy, ascending: this.state.ascending };
      }
    },
    methods: {
      commit: function commit(action, payload) {
        return this.$store.commit(this.name + '/' + action, payload);
      },
      orderByColumn: function orderByColumn(column, _ref) {
        var shiftKey = _ref.shiftKey;

        if (!this.sortable(column)) {
          return;
        }

        if (shiftKey && this.orderBy.column && this.hasMultiSort) {
          this.setUserMultiSort(column);
        } else {
          var ascending = this.orderBy.column == column ? !this.orderBy.ascending : true;
          var orderBy = {
            column: column,
            ascending: ascending
          };
          this.updateState('orderBy', orderBy);
          this.commit('SORT', orderBy);
          this.dispatch('sorted', orderBy);
        }
      },
      setLimit: function setLimit(e) {
        var limit = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' ? parseInt(e.target.value, 10) : e;
        this.updateState('perPage', limit);
        this.commit('SET_LIMIT', limit);
        this.dispatch('limit', limit);
      },
      setOrder: function setOrder(column, ascending) {
        this.updateState('orderBy', { column: column, ascending: ascending });
        this.commit('SORT', { column: column, ascending: ascending });
      },
      setPage: function setPage(page) {
        if (!page) {
          page = this.$refs.page.value;
        }

        if (!this.opts.pagination.dropdown) {
          this.$refs.pagination.Page = page;
        }

        this.commit('PAGINATE', page);
      }
    }
  }, extra);
};

function serverExtra() {
  return {
    methods: {
      setData: function setData(data) {
        var _this = this;

        this.commit('SET_DATA', data);
        this.commit('LOADED', data);

        setTimeout(function () {
          _this.dispatch('loaded', data);
        }, 0);
      }
    }
  };
}

function clientExtra() {
  return {};
}
module.exports = exports['default'];