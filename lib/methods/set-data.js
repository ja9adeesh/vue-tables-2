export default function (response) {
  const data = this
    .opts
    .responseAdapter
    .call(this, response);

  this.data = this.applyFilters(data.data);
  this.count = parseInt(data.count, 10);

  setTimeout(() => {
    this.dispatch('loaded', response);
  }, 0);
}
