import merge from 'merge';

export default source => {
  const extra = source === 'server'
    ? serverExtra()
    : clientExtra();

  return merge.recursive(true, {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      state() {
        return this.$store.state[this.name];
      },
      Page() {
        return this.state.page;
      },
      count() {
        return this.state.count;
      },
      Columns() {
        return this.state.columns;
      },
      tableData() {
        return this.state.data;
      },
      page() {
        return this.state.page;
      },
      limit() {
        return this.state.limit;
      },
      customQueries() {
        return this.state.customQueries;
      },
      query() {
        return this.state.query;
      },
      orderBy() {
        return {column: this.state.sortBy, ascending: this.state.ascending};
      }
    },
    methods: {
      commit(action, payload) {
        return this
          .$store
          .commit(`${this.name}/${action}`, payload);
      },
      orderByColumn(column, {shiftKey}) {
        if (!this.sortable(column)) {
          return;
        }

        if (shiftKey && this.orderBy.column && this.hasMultiSort) {
          this.setUserMultiSort(column);
        } else {
          const ascending = this.orderBy.column == column
            ? !this.orderBy.ascending
            : true;
          const orderBy = {
            column,
            ascending
          };
          this.updateState('orderBy', orderBy);
          this.commit('SORT', orderBy);
          this.dispatch('sorted', orderBy);
        }
      },
      setLimit(e) {
        const limit = typeof e === 'object'
          ? parseInt(e.target.value, 10)
          : e;
        this.updateState('perPage', limit);
        this.commit('SET_LIMIT', limit);
        this.dispatch('limit', limit);
      },
      setOrder(column, ascending) {
        this.updateState('orderBy', {column, ascending});
        this.commit('SORT', {column, ascending});
      },
      setPage(page) {
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
      setData(data) {
        this.commit('SET_DATA', data);
        this.commit('LOADED', data);

        setTimeout(() => {
          this.dispatch('loaded', data);
        }, 0);
      }
    }
  };
}

function clientExtra() {
  return {};
}
