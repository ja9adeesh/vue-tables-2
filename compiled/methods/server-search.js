'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e, _ref) {
  var target = _ref.target;

  // we need to handle the store this.query to make sure we're not mutating
  // outside of it
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;

  var name = void 0;
  var value = void 0;
  // in case we pass an object manually (mostly used for init-date-filters should
  // refactor
  if (Object.prototype.toString.call(e).slice(8, -1) === 'Object') {
    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e;

    if (!this.vuex) {
      this.query = query;
    }

    name = target.name;
    value = target.value;

    if (name) {
      this.dispatch('filter', { name: name, value: value });
      this.dispatch('filter::' + name, value);
    } else {
      this.dispatch('filter', value);
    }

    this.updateState('query', query);
  } else if (e) {
    name = this.getName(e.target.name);
    value = e.target.value;

    if (name) {
      query[name] = value;
    } else {
      query = value;
    }

    if (!this.vuex) {
      this.query = query;
    }

    if (name) {
      this.dispatch('filter', { name: name, value: value });
      this.dispatch('filter::' + name, value);
    } else {
      this.dispatch('filter', value);
    }

    this.updateState('query', query);
  }

  return search(this, query);
};

function search(that, query) {
  if (that.vuex) {
    that.commit('SET_FILTER', query);
  } else {
    that.initPagination();

    if (that.opts.pagination.dropdown) {
      that.getData();
    }
  }
}

// eslint-disable-next-line no-unused-vars
function noDebounce(e, name, _ref2) {
  var dateColumns = _ref2.dateColumns,
      listColumns = _ref2.listColumns;

  return !e || name && (dateColumns.includes(name) || Object.keys(listColumns).includes(name));
}
module.exports = exports['default'];