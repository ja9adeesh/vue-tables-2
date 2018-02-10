// eslint-disable-next-line no-unused-vars
export default function (h) {
  return column => {
    return (
      <div class="vue-table-date-filter" id={`vue-table-${column}-filter`}>
        <span class="vue-table-filter-placeholder">{this.display('filterBy', {
          column: this.getHeading(column)
        })}</span>
      </div>
    );
  };
}
