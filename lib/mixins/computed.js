import listColumnsObject from '../computed/list-columns-object';
import allColumns from '../computed/all-columns';
import templatesKeys from '../computed/templates-keys';
import opts from '../computed/opts';
import tableData from '../computed/table-data';
import storage from '../computed/storage';
import filterableColumns from '../computed/filterable-columns';
import hasChildRow from '../computed/has-child-row';
import colspan from '../computed/colspan';

export default {
  listColumnsObject,
  allColumns,
  templatesKeys,
  opts,
  tableData,
  storage,
  filterableColumns,
  hasChildRow,
  colspan,
  stateKey() {
    const key = this.name
      ? this.name
      : this.id;
    return `vuetables_${key}`;
  },
  Page() {
    return this.page;
  }
};
