'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, row) {
  // scoped slot
  if (this.$scopedSlots.child_row) {
    return this.$scopedSlots.child_row({ row: row });
  }

  var childRow = this.opts.childRow;

  // function
  if (typeof childRow === 'function') {
    return childRow.apply(this, [h, row]);
  }

  // component
  return h(childRow, {
    attrs: {
      data: row
    }
  });
};

module.exports = exports['default'];