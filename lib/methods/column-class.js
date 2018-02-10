export default function (column) {
  const c = this.opts.columnsClasses;

  return c.hasOwnProperty(column)
    ? c[column]
    : '';
}
