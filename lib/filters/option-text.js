export default function (value, column) {
  const list = this.listColumnsObject[column];

  if (typeof list[value] === 'undefined') {
    return value;
  }

  return list[value];
}
