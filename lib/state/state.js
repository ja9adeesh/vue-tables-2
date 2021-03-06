import merge from 'merge';

export default self => {
  const state = {
    page: self.opts.initialPage
      ? self.opts.initialPage
      : 1,
    limit: self.opts.perPage,
    count: self.source === 'server'
      ? 0
      : self.data.length,
    columns: self.columns,
    data: self.source === 'client'
      ? self.data
      : [],
    query: self.initQuery(),
    customQueries: self.initCustomFilters(),
    sortBy: self.opts.orderBy && self.opts.orderBy.column
      ? self.opts.orderBy.column
      : false,
    ascending: self.opts.orderBy && self
      .opts
      .orderBy
      .hasOwnProperty('ascending')
      ? self.opts.orderBy.ascending
      : true
  };

  if (typeof self.$store.state[self.name] !== 'undefined') {
    return merge(true, self.$store.state[self.name], state);
  }

  return state;
};
