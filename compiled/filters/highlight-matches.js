'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, column, h) {
  if (!this.opts.highlightMatches || !this.filterableColumns.includes(column)) {
    return value;
  }

  var query = this.opts.filterByColumn ? this.query[column] : this.query;

  if (!query) {
    return value;
  }

  query = new RegExp('(' + escapeRegex(query) + ')', 'i');

  return h('span', {
    class: 'vue-table-highlight'
  }, matches(value, query, h));
};

function matches(value, query, h) {
  var pieces = String(value).split(query);

  return pieces.map(function (piece) {
    if (query.test(piece)) {
      return h('b', {}, piece);
    }

    return piece;
  });
}

function escapeRegex(s) {
  return typeof s === 'string' ? s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') : s;
}
module.exports = exports['default'];