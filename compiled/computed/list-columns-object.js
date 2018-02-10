"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  var columns = Object.keys(this.opts.listColumns);

  var res = {};

  columns.forEach(function (column) {
    res[column] = {};

    _this.opts.listColumns[column].forEach(function (_ref) {
      var id = _ref.id,
          text = _ref.text;

      res[column][id] = text;
    });
  });

  return res;
};

module.exports = exports["default"];