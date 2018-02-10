export default function () {
  this
    .data
    // eslint-disable-next-line no-unused-vars
    .forEach((row, index) => {
      this
        .opts
        .dateColumns
        .forEach(column => {
          row[column] = window.moment(row[column], this.opts.toMomentFormat);
        });
    });
}
