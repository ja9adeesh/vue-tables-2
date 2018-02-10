"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (column) {
    return h(
      "div",
      { "class": "vue-table-date-filter", attrs: { id: "vue-table-" + column + "-filter" }
      },
      [h(
        "span",
        { "class": "vue-table-filter-placeholder" },
        [_this.display('filterBy', {
          column: _this.getHeading(column)
        })]
      )]
    );
  };
};

module.exports = exports["default"]; // eslint-disable-next-line no-unused-vars