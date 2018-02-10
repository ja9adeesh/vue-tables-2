export default function (colName, {shiftKey}) {
  if (!this.sortable(colName)) {
    return;
  }

  if (shiftKey && this.orderBy.column && this.hasMultiSort) {
    this.setUserMultiSort(colName);
  } else {
    this.userMultiSorting = {};
    this.orderBy.ascending = colName == this.orderBy.column
      ? !this.orderBy.ascending
      : true;
    this.orderBy.column = colName;

    this.updateState('orderBy', this.orderBy);
    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));
  }

  if (this.source === 'server') {
    this.getData();
  }
}
