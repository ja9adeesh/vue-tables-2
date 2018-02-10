export default function (rows = null) {
  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {
    throw new Error('vue-tables-2: Child row undefined or not a component');
  }

  const Rows = rows
    ? this
      .openChildRows
      .filter(row => rows.includes(row))
    : this.openChildRows;

  if (!Rows.length) {
    return [];
  }

  const components = this
    .$children
    .filter(({$options, data}) => {
      return $options.name === 'ChildRow' && Rows.includes(data[this.opts.uniqueKey]);
    });

  return components;
}
