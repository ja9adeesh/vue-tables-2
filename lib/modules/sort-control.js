export default(h, right) => function (column) {
  if (!this.sortable(column)) {
    return '';
  }
  return <span
    class={`vue-table-sort-icon ${right} ${this.sortableChevronClass(column)}`}></span>;
};
