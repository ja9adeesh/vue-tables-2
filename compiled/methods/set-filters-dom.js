'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (query) {
  var el = void 0;

  if (this.opts.filterByColumn) {
    for (var column in query) {
      if (this.isDateFilter(column)) {
        this._setDateFilterText(column, query[column]);
      } else {
        el = this.$el.querySelector('[name=\'vf__' + column + '\']');
        if (el) {
          el.value = query[column];
        } else {
          console.error('vue-tables-2: Error in setting filter value. Column \'' + column + '\' does not exist.');
        }
      }
    }
  } else {
    this.$el.querySelector('.vue-table-search input').value = query;
  }
};

module.exports = exports['default'];