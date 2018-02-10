'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  var el = void 0;

  _bus2.default.$off();
  _bus2.default.$destroy();

  if (this.vuex && !this.opts.preserveState) {
    this.$store.unregisterModule(this.name);
  }

  if (this.opts.filterByColumn) {
    this.opts.dateColumns.forEach(function (column) {
      el = window.$(_this.$el).find('#vue-table-' + column + '-filter').data('daterangepicker');
      if (el) {
        el.remove();
      }
    });
  }
};

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];