export default function (rowId) {
  return this
    .openChildRows
    .includes(rowId)
    ? 'vue-table-child-row-toggler--open'
    : 'vue-table-child-row-toggler--closed';
}
