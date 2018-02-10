export default function (data, customFilters, customQueries) {
  let passing;

  return data.filter(row => {
    passing = true;

    customFilters.forEach(filter => {
      const value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) {
        passing = false;
      }
    });

    return passing;
  });
}
