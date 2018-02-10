export default function (column) {
  let c = this.sortable(column)
    ? 'vue-table-sortable '
    : '';

  c += this.columnClass(column);

  return c;
}
