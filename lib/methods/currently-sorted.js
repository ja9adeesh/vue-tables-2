export default function (column) {
  const userMultiSort = Object.keys(this.userMultiSorting);

  if (!userMultiSort.length || this.orderBy.column === column) {
    return this.orderBy.column === column;
  }

  return !!this
    .userMultiSorting[userMultiSort[0]]
    .filter(col => {
      return col.column == column;
    })
    .length;
}
