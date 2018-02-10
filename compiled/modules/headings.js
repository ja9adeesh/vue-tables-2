"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = (0, _sortControl2.default)(h, right);

    var headings = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) {
      headings.push(h("th", null));
    }

    _this.allColumns.map(function (column) {
      headings.push(h(
        "th",
        {
          on: {
            "click": _this.orderByColumn.bind(_this, column)
          },

          "class": _this.sortableClass(column) },
        [h(
          "span",
          { "class": "vue-table-heading", attrs: { title: _this.getHeadingTooltip(column, h) }
          },
          [_this.getHeading(column, h)]
        ), sortControl.call(_this, column)]
      ));
    });

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) {
      headings.push(h("th", null));
    }

    return headings;
  };
};

var _sortControl = require("./sort-control");

var _sortControl2 = _interopRequireDefault(_sortControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];