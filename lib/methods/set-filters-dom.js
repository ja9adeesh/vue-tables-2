export default function (query) {
  let el;

  if (this.opts.filterByColumn) {
    for (const column in query) {
      if (this.isDateFilter(column)) {
        this._setDateFilterText(column, query[column]);
      } else {
        el = this
          .$el
          .querySelector(`[name='vf__${column}']`);
        if (el) {
          el.value = query[column];
        } else {
          console.error(`vue-tables-2: Error in setting filter value. Column '${column}' does not exist.`);
        }
      }
    }
  } else {
    this
      .$el
      .querySelector('.vue-table-search input')
      .value = query;
  }
}
