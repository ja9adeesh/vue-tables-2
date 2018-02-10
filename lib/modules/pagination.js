// eslint-disable-next-line no-unused-vars
export default function (h) {
  return (theme) => {
    if (this.opts.pagination && this.opts.pagination.dropdown) {
      return '';
    }

    const name = this.vuex
      ? this.name
      : this.id;

    return <pagination
      ref="pagination"
      theme={theme}
      for={name}
      vuex={this.vuex}
      records={this.count}
      per-page={parseInt(this.limit, 10)}
      chunk={this.opts.pagination.chunk}
      count-text={this.opts.texts.count}
      onPaginate={this
        ._onPagination
        .bind(this)}></pagination>;
  };
}
