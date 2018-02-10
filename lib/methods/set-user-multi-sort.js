export default function (secondaryCol) {
  const primaryCol = this.orderBy.column;
  const primaryAsc = this.orderBy.ascending;

  if (!this.userMultiSorting[primaryCol]) {
    this.userMultiSorting[primaryCol] = [];
  }

  const multi = this.userMultiSorting[primaryCol];

  if (primaryCol === secondaryCol) {
    if (!multi.length || primaryAsc) {
      // primary is the only sorted column or is ascending
      this.orderBy.ascending = !this.orderBy.ascending;
    } else {
      // remove primary column and make secondary primary
      this.orderBy = multi.shift();
      this.userMultiSorting = {};
      this.userMultiSorting[this.orderBy.column] = multi;
    }
  } else {
    const secondary = multi.filter(({column}) => column === secondaryCol)[0];

    if (secondary) {
      if (!secondary.ascending) {
        // remove sort
        this.userMultiSorting[primaryCol] = multi.filter(({column}) => column !== secondaryCol);
        if (!this.userMultiSorting[primaryCol].length) {
          this.userMultiSorting = {};
        }
      } else {
        // change direction
        secondary.ascending = !secondary.ascending;
      }
    } else {
      // add sort
      multi.push({column: secondaryCol, ascending: true});
    }
  }
  // force re-compilation of the filteredData computed property
  this.time = Date.now();

  this.dispatch('sorted', getMultiSortData(this.orderBy, this.userMultiSorting));
}

function getMultiSortData(main, secondary) {
  let cols = [JSON.parse(JSON.stringify(main))];
  cols = cols.concat(secondary[main.column]);
  return cols;
}
