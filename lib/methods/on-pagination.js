export default function (page) {
  if (this.vuex) {
    return;
  }

  this.setPage(page);
  this.dispatch('pagination', page);
}