export default function () {
  const customQueries = {};

  const init = this.opts.initFilters;
  let key;

  this
    .opts
    .customFilters
    .forEach(filter => {
      key = this.source === 'client'
        ? filter.name
        : filter;

      customQueries[key] = init.hasOwnProperty(key)
        ? init[key]
        : '';
    });

  return customQueries;
}
