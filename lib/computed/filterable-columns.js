export default function () {
  return this.opts.filterable && this.opts.filterable.length
    ? this.opts.filterable
    : this.Columns;
}
