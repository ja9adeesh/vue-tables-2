export default function () {
  return this.opts.filterByColumn
    ? JSON.stringify(this.query)
    : this.query;
}
