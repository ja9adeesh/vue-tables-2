import merge from 'merge';
import stateData from './state/data';
import vuex from './state/vuex';
import normal from './state/normal';
import Table from './table';
import {Pagination} from 'vue-pagination-2';

import data from './mixins/data';
import created from './mixins/created';
import templateCompiler from './template-compiler';

import refresh from './methods/refresh';
import getData from './methods/get-data';
import setData from './methods/set-data';
import serverSearch from './methods/server-search';
import registerServerFilters from './methods/register-server-filters';
import totalPages from './computed/total-pages';

export default {
  install
};

function install(Vue, globalOptions, useVuex, theme = 'bootstrap3', template = 'default') {
  const globalState = useVuex
    ? vuex('server')
    : normal();

  const server = merge.recursive(true, Table(), {
    name: 'server-table',
    components: {
      Pagination
    },
    render: templateCompiler.call(this, template, theme),
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
        default() {
          return {};
        }
      }
    },
    created() {
      created(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      this.loadState();

      this
        .getData(true)
        .then(response => {
          this.setData(response);

          this.loading = false;

          if (this.hasDateFilters()) {
            setTimeout(() => {
              this.initDateFilters();
            }, 0);
          }
        });
    },
    mounted() {
      if (this.opts.saveState) {
        const state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.hasDateFilters) {
          this
            .opts
            .dateColumns
            .forEach(column => this._setDateFilterText(column, state.query[column]));
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
    data() {
      return merge.recursive(data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions
      }, stateData(useVuex, 'server', this.options.initialPage));
    },
    methods: {
      refresh,
      getData,
      setData,
      serverSearch,
      registerServerFilters,
      loadState() {
        if (!this.opts.saveState) {
          return;
        }

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        const state = JSON.parse(this.storage.getItem(this.stateKey));

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
          setTimeout(() => {
            this.$refs.pagination.Page = state.page;
          }, 0);
        }

        this.activeState = true;
      }
    },
    computed: {
      totalPages,
      hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }

  }, globalState);

  Vue.component('v-server-table', server);

  return server;
}