export default function (page = this.$refs.page.value, preventRequest) {
  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.Page = page;
  }

  this.page = page;

  this.updateState('page', page);

  if (this.source === 'server' && !preventRequest) {
    this.getData();
  }
}
