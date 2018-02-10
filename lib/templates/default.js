import merge from 'merge';
import fnPerpageValues from '../modules/per-page-values';

export default function (h, modules, classes, slots) {
  const filterId = `vue-table-search_${this.id}`;
  const ddpId = `vue-table-dropdown-pagination_${this.id}`;
  const perpageId = `vue-table-limit_${this.id}`;
  const perpageValues = fnPerpageValues.call(this, h);

  const genericFilter = this.opts.filterByColumn || !this.opts.filterable
    ? ''
    : <div class="vue-table-search-field">
      <label for={filterId} class={classes.label}>{this.display('filter')}</label>
      {modules.normalFilter(classes, filterId)}
    </div>;

  const perpage = perpageValues.length > 1
    ? <div class="vue-table-limit-field">
      <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
      {modules.perPage(perpageValues, classes.select, perpageId)}
    </div>
    : '';

  const dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown
    ? <div class="vue-table-pagination-wrapper">
      <div
        class={`${classes.field} ${classes.inline} ${classes.right} vue-table-dropdown-pagination`}
        v-show={this.totalPages > 1}>
        <label for={ddpId}>{this.display('page')}</label>
        {modules.dropdownPagination(classes.select, ddpId)}
      </div>
    </div>
    : '';

  const columnsDropdown = this.opts.columnsDropdown
    ? <div class="vue-table-columns-dropdown-wrapper">
      {modules.columnsDropdown(classes)}
    </div>
    : '';

  const footerHeadings = this.opts.footerHeadings
    ? <tfoot>
      <tr>{modules.headings(classes.right)}</tr>
    </tfoot>
    : '';

  return (
    <div class={`vue-table vue-table--${this.source}`}>
      <div class={classes.row}>
        <div class={classes.column}>

          <div
            class={`${classes.field} ${classes.inline} ${classes.left} vue-table-search`}>
            {slots.beforeFilter}
            {genericFilter}
            {slots.afterFilter}
          </div>

          <div
            class={`${classes.field} ${classes.inline} ${classes.right} vue-table-limit`}>
            {slots.beforeLimit}
            {perpage}
            {slots.afterLimit}
          </div>

          {dropdownPagination}
          {columnsDropdown}
        </div>
      </div>
      {slots.beforeTable}
      <div class="table-responsive">
        <table
          class={`vue-table-table ${this.opts.skin
            ? this.opts.skin
            : classes.table}`}>
          <thead>
            <tr>
              {modules.headings(classes.right)}
            </tr>
            {slots.beforeFilters}
            {modules.columnFilters(classes)}
            {slots.afterFilters}
          </thead>
          {footerHeadings}
          {slots.beforeBody}
          <tbody>
            {slots.prependBody}
            {modules.rows(classes)}
            {slots.appendBody}
          </tbody>
          {slots.afterBody}
        </table>
      </div>
      {modules.pagination(merge(classes.pagination, {
        wrapper: `${classes.row} ${classes.column} ${classes.contentCenter}`,
        nav: classes.center,
        count: `${classes.center} ${classes.column}`
      }))}
      {modules.dropdownPaginationCount()}

    </div>
  );
}
