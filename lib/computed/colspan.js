export default function () {
  return this.hasChildRow
    ? this.allColumns.length + 1
    : this.allColumns.length;
}