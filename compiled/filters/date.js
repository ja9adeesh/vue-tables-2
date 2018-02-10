'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  if ((0, _isValidMomentObject2.default)(property)) {
    return property.format(this.opts.dateFormat);
  }

  return property;
};

var _isValidMomentObject = require('../helpers/is-valid-moment-object');

var _isValidMomentObject2 = _interopRequireDefault(_isValidMomentObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];