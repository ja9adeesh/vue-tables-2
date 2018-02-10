import object_filled_keys_count from '../helpers/object-filled-keys-count';
import is_valid_moment_object from '../helpers/is-valid-moment-object';
import filterByCustomFilters from '../filters/custom-filters';

export default function (data, e) {
  let value;

  if (e) {
    let query = this.query;

    this.setPage(1, true);

    const name = this.getName(e.target.name);
    value = typeof e.target.value === 'object'
      ? e.target.value
      : `${e.target.value}`;

    if (name) {
      query[name] = value;
    } else {
      query = value;
    }

    if (this.vuex) {
      this.commit('SET_FILTER', query);
    } else {
      this.query = query;
    }

    this.updateState('query', query);

    if (name) {
      this.dispatch('filter', {name, value});
      this.dispatch(`filter::${name}`, value);
    } else {
      this.dispatch('filter', value);
    }
  }

  const query = this.query;

  let totalQueries = !query
    ? 0
    : 1;

  if (!this.opts) {
    return data;
  }

  if (this.opts.filterByColumn) {
    totalQueries = object_filled_keys_count(query);
  }

  let found;
  let currentQuery;
  const dateFormat = this.opts.dateFormat;
  let filterByDate;
  let isListFilter;

  const dataFiltered = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);

  if (!totalQueries) {
    return dataFiltered;
  }

  // eslint-disable-next-line no-unused-vars
  return dataFiltered.filter((row, index) => {
    found = 0;

    this
      .filterableColumns
      .forEach(column => {
        filterByDate = this
          .opts
          .dateColumns
          .includes(column) && this.opts.filterByColumn;
        isListFilter = this.isListFilter(column) && this.opts.filterByColumn;

        value = getValue(row[column], filterByDate, dateFormat);

        currentQuery = this.opts.filterByColumn
          ? query[column]
          : query;

        currentQuery = setCurrentQuery(currentQuery);

        if (currentQuery && foundMatch(currentQuery, value, isListFilter)) {
          found++;
        }
      });

    return found >= totalQueries;
  });
}

function setCurrentQuery(query) {
  if (!query) {
    return '';
  }

  if (typeof query === 'string') {
    return query.toLowerCase();
  }

  // Date Range

  return query;
}

function foundMatch(query, value, isListFilter) {
  if (['string', 'number'].includes(typeof value)) {
    value = String(value).toLowerCase();
  }

  // List Filter
  if (isListFilter) {
    return value == query;
  }

  // Text Filter
  if (typeof value === 'string') {
    return value.includes(query);
  }

  // Date range
  let start;
  let end;

  if (is_valid_moment_object(value)) {
    start = moment(query.start, 'YYYY-MM-DD HH:mm:ss');
    end = moment(query.end, 'YYYY-MM-DD HH:mm:ss');

    return value >= start && value <= end;
  }

  if (typeof value === 'object') {
    for (const key in value) {
      if (foundMatch(query, value[key])) {
        return true;
      }
    }

    return false;
  }

  return (value >= start && value <= end);
}

function getValue(val, filterByDate, dateFormat) {
  if (is_valid_moment_object(val)) {
    if (filterByDate) {
      return val;
    }
    return val.format(dateFormat);
  }

  return val;
}
