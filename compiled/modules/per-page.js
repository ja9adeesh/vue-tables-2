"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {
    return perpageValues.length > 1 ? h(
      "select",
      {
        "class": cls,
        attrs: { name: "limit",

          id: id },
        domProps: {
          "value": _this.limit
        },
        on: {
          "change": _this.setLimit.bind(_this)
        }
      },
      [perpageValues]
    ) : '';
  };
};

module.exports = exports["default"]; // eslint-disable-next-line no-unused-vars