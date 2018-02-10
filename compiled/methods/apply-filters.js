'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var _this = this;

  return data.map(function (row) {
    for (var column in row) {
      if (row.hasOwnProperty(column)) {
        if (_this.source === 'client') {
          row[column] = _this.formatDate(row[column], _this.opts.dateFormat);
        }

        if (_this.isListFilter(column) && !_this.opts.templates[column] && !_this.$scopedSlots[column]) {
          row[column] = _this.optionText(row[column], column);
        }
      }
    }

    return row;
  });
};

module.exports = exports['default'];