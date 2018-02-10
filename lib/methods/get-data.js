import merge from 'merge';

export default function (promiseOnly, additionalData = {}, emitLoading = true) {
  const keys = this.opts.requestKeys;

  let data = {
    [keys.query]: this.query,
    [keys.limit]: this.limit,
    [keys.ascending]: this.orderBy.ascending
      ? 1
      : 0,
    [keys.page]: this.page,
    [keys.byColumn]: this.opts.filterByColumn
      ? 1
      : 0
  };

  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) {
    data[keys.orderBy] = this.orderBy.column;
  }

  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  data = this
    .opts
    .requestAdapter(data);

  if (emitLoading) {
    this.dispatch('loading', data);
  }

  const promise = this.sendRequest(data);

  if (promiseOnly) {
    return promise;
  }

  return promise.then(response => this.setData(response));
}
