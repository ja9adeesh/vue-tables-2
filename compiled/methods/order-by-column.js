'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (colName, _ref) {
  var shiftKey = _ref.shiftKey;

  if (!this.sortable(colName)) {
    return;
  }

  if (shiftKey && this.orderBy.column && this.hasMultiSort) {
    this.setUserMultiSort(colName);
  } else {
    this.userMultiSorting = {};
    this.orderBy.ascending = colName === this.orderBy.column ? !this.orderBy.ascending : true;
    this.orderBy.column = colName;

    this.updateState('orderBy', this.orderBy);
    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));
  }

  if (this.source === 'server') {
    this.getData();
  }
};

module.exports = exports['default'];