"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (selectClass, id) {
    var pages = [];
    var selected = void 0;

    for (var pag = 1; pag <= _this.totalPages; pag++) {
      selected = _this.page == pag;
      pages.push(h(
        "option",
        {
          domProps: {
            "value": pag,
            "selected": selected
          }
        },
        [pag]
      ));
    }
    return h(
      "select",
      {
        "class": selectClass + " dropdown-pagination",
        directives: [{
          name: "show",
          value: _this.totalPages > 1
        }],
        attrs: {
          name: "page",

          id: id },
        ref: "page",
        domProps: {
          "value": _this.page
        },
        on: {
          "change": _this.setPage.bind(_this, null, false)
        }
      },
      [pages]
    );
  };
};

var _debounce = require("debounce");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
module.exports = exports["default"];

// eslint-disable-next-line no-unused-vars