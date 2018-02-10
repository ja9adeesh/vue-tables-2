'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (typeof $ === 'undefined') {
    console.error('Date filters require jquery and daterangepicker');
    return;
  }

  var el = void 0;
  var that = this;
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;

  var search = function search(_query, e) {
    return that.source === 'client' ? that.search(that.data, e) : that.serverSearch(query, e);
  };

  var datepickerOptions = _merge2.default.recursive(this.opts.datepickerOptions, {
    autoUpdateInput: false,
    singleDatePicker: false,
    locale: {
      format: this.opts.dateFormat
    }
  });

  that.opts.dateColumns.forEach(function (column) {
    el = window.$(that.$el).find('#vue-table-' + column + '-filter');
    el.daterangepicker(datepickerOptions);

    el.on('apply.daterangepicker', function (ev, _ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;

      query[column] = {
        start: startDate.format('YYYY-MM-DD HH:mm:ss'),
        end: endDate.format('YYYY-MM-DD HH:mm:ss')
      };

      if (!that.vuex) {
        that.query = query;
      }

      window.$(this).text(startDate.format(that.opts.dateFormat) + ' - ' + endDate.format(that.opts.dateFormat));

      that.updateState('query', query);

      search(query, {
        target: {
          name: 'vf__' + column,
          value: query[column]
        }
      });
    });

    el.on('cancel.daterangepicker', function (ev, picker) {
      query[column] = '';

      if (!that.vuex) {
        that.query = query;
      }

      picker.setStartDate(moment());
      picker.setEndDate(moment());

      that.updateState('query', query);

      window.$(this).html('<span class=\'vue-table-filter-placeholder\'>' + that.display('filterBy', {
        column: that.getHeading(column) }) + '</span>');

      search(query, {
        target: {
          name: 'vf__' + column,
          value: query[column]
        }
      });
    });
  });
};

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];