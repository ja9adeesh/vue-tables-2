'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  var event = 'vue-tables';
  if (this.name) {
    event += '.' + this.name;
  }

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off(event + '.filter::' + filter);
    _bus2.default.$on(event + '.filter::' + filter, function (value) {
      _this.customQueries[filter] = value;
      _this.updateState('customQueries', _this.customQueries);
      _this.refresh();
    });
  });
};

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];