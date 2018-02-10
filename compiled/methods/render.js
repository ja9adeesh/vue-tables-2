'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (row, column, index, h) {
  if (!this.templatesKeys.includes(column)) {
    return this.highlightMatch(row[column], column, h);
  }

  var template = this.opts.templates[column];

  template = typeof template === 'function' ? template.apply(this.$root, [h, row, index]) : h(template, {
    attrs: {
      data: row,
      index: index
    }
  });

  return h(
    'span',
    { 'class': 'vue-table-template' },
    [template]
  );
};

module.exports = exports['default'];