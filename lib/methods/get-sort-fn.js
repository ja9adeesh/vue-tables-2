export default function (column) {
  const ascending = this.orderBy.ascending;

  this.currentlySorting = {
    column,
    ascending
  };

  if (typeof this.opts.customSorting[column] === 'undefined') {
    return this.defaultSort(column, ascending);
  }

  return this.opts.customSorting[column](ascending);
}
