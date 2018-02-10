import _textFilter from './text-filter';
import _dateFilter from './date-filter';
import _listFilter from './list-filter';

export default function (h) {
  return ({input, select}) => {
    if (!this.opts.filterByColumn || !this.opts.filterable) {
      return '';
    }

    const textFilter = _textFilter.call(this, h, input);
    const dateFilter = _dateFilter.call(this, h);
    const listFilter = _listFilter.call(this, h, select);

    const filters = [];

    if (this.hasChildRow && this.opts.childRowTogglerFirst) {
      filters.push(
        <th></th>
      );
    }

    this
      .allColumns
      .map(column => {
        let filter = '';

        if (this.filterable(column)) {
          switch (true) {
          case this.isTextFilter(column):
            filter = textFilter(column);
            break;
          case this.isDateFilter(column):
            filter = dateFilter(column);
            break;
          case this.isListFilter(column):
            filter = listFilter(column);
            break;
          default:
            break;
          }
        }

        if (typeof this.$slots[`filter__${column}`] !== 'undefined') {
          filter = filter
            ? <div>{filter}{this.$slots[`filter__${column}`]}</div>
            : this.$slots[`filter__${column}`];
        }

        filters.push(
          <th class={this.columnClass(column)}>
            <div
              class="vue-table-column-filter"
              class={`vue-table-${column}-filter-wrapper`}>
              {filter}
            </div>
          </th>
        );
      });

    if (this.hasChildRow && !this.opts.childRowTogglerFirst) {
      filters.push(
        <th></th>
      );
    }

    return <tr class="vue-table-filters-row">
      {filters}
    </tr>;
  };
}
