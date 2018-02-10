export default function (column) {
  if (!this.opts.filterable) {
    return false;
  }

  return (typeof this.opts.filterable === 'boolean' && this.opts.filterable) || this
    .opts
    .filterable
    .includes(column);
}
