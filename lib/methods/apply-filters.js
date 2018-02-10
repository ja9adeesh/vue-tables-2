export default function (data) {
  return data.map(row => {
    for (const column in row) {
      if (row.hasOwnProperty(column)) {
        if (this.source === 'client') {
          row[column] = this.formatDate(row[column], this.opts.dateFormat);
        }

        if (this.isListFilter(column) && !this.opts.templates[column] && !this.$scopedSlots[column]) {
          row[column] = this.optionText(row[column], column);
        }
      }
    }

    return row;
  });
}
