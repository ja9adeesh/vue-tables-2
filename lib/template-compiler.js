import fnBootstrap3 from './themes/bootstrap3';
import fnBootstrap4 from './themes/bootstrap4';
import fnBulma from './themes/bulma';
import tpDefault from './templates/default';
import tpFooterPagination from './templates/footer-pagination';
import fnRows from './modules/rows';
import fnNormalFilter from './modules/normal-filter';
import fnDropdownPagination from './modules/dropdown-pagination';
import fnDropdownPaginationCount from './modules/dropdown-pagination-count';
import fnColumnFilters from './modules/column-filters';
import fnPagination from './modules/pagination';
import fnHeadings from './modules/headings';
import fnPerPage from './modules/per-page';
import fnColumnsDropdown from './modules/columns-dropdown';
import fnSlots from './slots';

export default(template, theme) => {
  const themes = {
    bootstrap3: fnBootstrap3(),
    bootstrap4: fnBootstrap4(),
    bulma: fnBulma()
  };

  const templates = {
    default: tpDefault,
    footerPagination: tpFooterPagination
  };

  return function (h) {
    const modules = {
      rows: fnRows.call(this, h),
      normalFilter: fnNormalFilter.call(this, h),
      dropdownPagination: fnDropdownPagination.call(this, h),
      dropdownPaginationCount: fnDropdownPaginationCount.call(this, h),
      columnFilters: fnColumnFilters.call(this, h),
      pagination: fnPagination.call(this, h),
      headings: fnHeadings.call(this, h),
      perPage: fnPerPage.call(this, h),
      columnsDropdown: fnColumnsDropdown.call(this, h)
    };

    if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {
      throw `vue-tables-2: Template "${template}" does not exist`;
    }

    if (typeof theme === 'string' && (!themes[theme] || typeof themes[theme] !== 'object')) {
      throw `vue-tables-2: Theme "${theme}" does not exist`;
    }

    const tpl = typeof template === 'string'
      ? templates[template]
      : template;
    const thm = typeof theme === 'string'
      ? themes[theme]
      : theme();
    const slots = fnSlots.call(this);

    return tpl.call(this, h, modules, thm, slots);
  };
};