'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, dateFormat) {
  if (!(0, _isValidMomentObject2.default)(value)) {
    return value;
  }

  return value.format(dateFormat);
};

var _isValidMomentObject = require('../helpers/is-valid-moment-object');

var _isValidMomentObject2 = _interopRequireDefault(_isValidMomentObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];