export default function (row, event) {
  let data;
  const id = this.opts.uniqueKey;

  if (this.source === 'client' && typeof row[id] !== 'undefined') {
    data = this
      .tableData
      .filter(r => row[id] === r[id])[0];
  } else {
    data = row;
  }

  this.dispatch('row-click', {
    row: data,
    event
  });
}
