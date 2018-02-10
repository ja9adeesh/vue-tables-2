export default function () {
  this
    .data
    // eslint-disable-next-line no-unused-vars
    .forEach((row, index) => {
      this
        .opts
        .dateColumns
        .forEach(column => {
          row[column] = moment(row[column], this.opts.toMomentFormat);
        });
    });
}
