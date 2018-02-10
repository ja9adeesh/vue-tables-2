export default function (row, column, index, h) {
  if (!this.templatesKeys.includes(column)) {
    return this.highlightMatch(row[column], column, h);
  }

  let template = this.opts.templates[column];

  template = typeof template === 'function'
    ? template.apply(this.$root, [h, row, index])
    : h(template, {
      attrs: {
        data: row,
        index
      }
    });

  return <span class='vue-table-template'>{template}</span>;
}
