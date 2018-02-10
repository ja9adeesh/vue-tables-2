export default function () {
  const init = this.opts.initFilters;

  if (!this.opts.filterByColumn) {
    return init.hasOwnProperty('GENERIC')
      ? init.GENERIC
      : '';
  }

  const query = {};

  const filterable = this.opts.filterable && typeof this.opts.filterable === 'object'
    ? this.opts.filterable
    : this.columns;

  filterable.forEach(column => {
    query[column] = getInitialValue(init, column);
  });

  return query;
}

function getInitialValue(init, column) {
  if (!init.hasOwnProperty(column)) {
    return '';
  }

  if (typeof init[column].start === 'undefined') {
    return init[column];
  }

  return {
    start: init[column]
      .start
      .format('YYYY-MM-DD HH:mm:ss'),
    end: init[column]
      .end
      .format('YYYY-MM-DD HH:mm:ss')
  };
}
