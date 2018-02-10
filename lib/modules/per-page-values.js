// eslint-disable-next-line no-unused-vars
export default function (h) {
  const perpageValues = [];

  this
    .opts
    .perPageValues
    .every(value => {
      const isLastEntry = value >= this.count;
      const selected = this.limit === value || (isLastEntry && this.limit > value);
      perpageValues.push(
        <option value={value} selected={selected}>{value}</option>
      );
      return !isLastEntry;
    });

  return perpageValues;
}
