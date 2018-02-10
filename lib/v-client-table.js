import {Pagination} from 'vue-pagination-2';
import vuex from './state/vuex';
import normal from './state/normal';
import merge from 'merge';
import Table from './table';
import stateData from './state/data';

import data from './mixins/data';
import created from './mixins/created';
import templateCompiler from './template-compiler';

import q from './computed/q';
import customQ from './computed/custom-q';
import totalPages from './computed/total-pages';
import filteredData from './computed/filtered-data';
import setCount from './filters/set-count';
import date from './filters/date';
import transformDateStringsToMoment from './methods/transform-date-strings-to-moment';
import registerClientFilters from './methods/register-client-filters';
import search from './methods/client-search';
import defaultSort from './methods/default-sort';

export default {
  install
};

function install(Vue, globalOptions, useVuex, theme = 'bootstrap3', template = 'default') {
  let client = merge.recursive(true, Table(), {
    name: 'client-table',
    components: {
      Pagination
    },
    render: templateCompiler.call(this, template, theme),
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
        default() {
          return {};
        }
      }
    },

    created() {
      created(this);

      if (!this.vuex) {
        this.initOrderBy();

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();
      }
    },

    mounted() {
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

    data() {
      return merge.recursive(data(), {
        source: 'client',
        globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, stateData(useVuex, 'client', this.options.initialPage));
    },
    computed: {
      q,
      customQ,
      totalPages,
      filteredData,
      hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },

    filters: {
      setCount,
      date
    },

    methods: {
      transformDateStringsToMoment,
      registerClientFilters,
      search,
      defaultSort,
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

  const state = useVuex
    ? vuex()
    : normal();

  client = merge.recursive(client, state);

  Vue.component('v-client-table', client);

  return client;
}