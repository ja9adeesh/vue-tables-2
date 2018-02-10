'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self) {
  var store = {
    state: (0, _state2.default)(self),
    mutations: (0, _mutations2.default)(self)
  };

  self.$store.registerModule(self.name, store);
};

module.exports = exports['default'];