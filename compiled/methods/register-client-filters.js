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

  this.opts.customFilters.forEach(function (_ref) {
    var name = _ref.name;

    _bus2.default.$off(event + '.filter::' + name);
    _bus2.default.$on(event + '.filter::' + name, function (value) {
      _this.customQueries[name] = value;
      _this.updateState('customQueries', _this.customQueries);
      _this.setPage(1);
      _this.search(_this.data);
    });
  });
};

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];