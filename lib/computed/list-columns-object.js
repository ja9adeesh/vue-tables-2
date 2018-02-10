export default function () {
  const columns = Object.keys(this.opts.listColumns);

  const res = {};

  columns.forEach(column => {
    res[column] = {};

    this
      .opts
      .listColumns[column]
      .forEach(({id, text}) => {
        res[column][id] = text;
      });
  });

  return res;
}
