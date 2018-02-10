export default function (column, ascending, multiIndex = -1) {
  const sort = this.defaultSort;
  const multiSort = this.userMultiSorting[this.currentlySorting.column]
    ? this.userMultiSorting[this.currentlySorting.column]
    : this.opts.multiSorting[this.currentlySorting.column];
  const asc = this.currentlySorting.ascending;

  return (a, b) => {
    let aVal = a[column];
    let bVal = b[column];
    const dir = ascending
      ? 1
      : -1;
    let secondaryAsc;

    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
    }
    if (typeof bVal === 'string') {
      bVal = bVal.toLowerCase();
    }

    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
      const sortData = multiSort[multiIndex + 1];
      if (typeof sortData.ascending !== 'undefined') {
        secondaryAsc = sortData.ascending;
      } else {
        secondaryAsc = sortData.matchDir
          ? asc
          : !asc;
      }

      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);
    }

    return aVal > bVal
      ? dir
      : -dir;
  };
}
