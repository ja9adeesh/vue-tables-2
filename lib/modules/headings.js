import fnSortControl from './sort-control';

export default function (h) {
  return (right) => {
    const sortControl = fnSortControl(h, right);

    const headings = [];

    if (this.hasChildRow && this.opts.childRowTogglerFirst) {
      headings.push(
        <th></th>
      );
    }

    this
      .allColumns
      .map(column => {
        headings.push(
          <th
            on-click={this
              .orderByColumn
              .bind(this, column)}
            class={this.sortableClass(column)}>
            <span class="vue-table-heading" title={this.getHeadingTooltip(column, h)}>{this.getHeading(column, h)}</span>
            {sortControl.call(this, column)}
          </th>
        );
      });

    if (this.hasChildRow && !this.opts.childRowTogglerFirst) {
      headings.push(
        <th></th>
      );
    }

    return headings;
  };
}
