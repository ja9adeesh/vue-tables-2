export default function (column) {
  const sortAll = typeof this.opts.sortable === 'boolean' && this.opts.sortable;

  if (sortAll) {
    return true;
  }

  return this
    .opts
    .sortable
    .includes(column);
}
