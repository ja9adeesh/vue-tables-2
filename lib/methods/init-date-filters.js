import merge from 'merge';

export default function () {
  if (typeof $ === 'undefined') {
    console.error('Date filters require jquery and daterangepicker');
    return;
  }

  let el;
  const that = this;
  const query = this.vuex
    ? JSON.parse(JSON.stringify(this.query))
    : this.query;

  const search = (_query, e) => that.source === 'client'
    ? that.search(that.data, e)
    : that.serverSearch(query, e);

  const datepickerOptions = merge.recursive(this.opts.datepickerOptions, {
    autoUpdateInput: false,
    singleDatePicker: false,
    locale: {
      format: this.opts.dateFormat
    }
  });

  that
    .opts
    .dateColumns
    .forEach(column => {
      el = window
        .$(that.$el)
        .find(`#vue-table-${column}-filter`);
      el.daterangepicker(datepickerOptions);

      el.on('apply.daterangepicker', function (ev, {startDate, endDate}) {
        query[column] = {
          start: startDate.format('YYYY-MM-DD HH:mm:ss'),
          end: endDate.format('YYYY-MM-DD HH:mm:ss')
        };

        if (!that.vuex) {
          that.query = query;
        }

        window
          .$(this)
          .text(`${startDate.format(that.opts.dateFormat)} - ${endDate.format(that.opts.dateFormat)}`);

        that.updateState('query', query);

        search(query, {
          target: {
            name: `vf__${column}`,
            value: query[column]
          }
        });
      });

      el.on('cancel.daterangepicker', function (ev, picker) {
        query[column] = '';

        if (!that.vuex) {
          that.query = query;
        }

        picker.setStartDate(window.moment());
        picker.setEndDate(window.moment());

        that.updateState('query', query);

        window
          .$(this)
          .html(`<span class='vue-table-filter-placeholder'>${that.display('filterBy', {
            column: that.getHeading(column)})}</span>`);

        search(query, {
          target: {
            name: `vf__${column}`,
            value: query[column]
          }
        });
      });
    });
}
