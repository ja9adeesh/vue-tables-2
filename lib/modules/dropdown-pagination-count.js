// eslint-disable-next-line no-unused-vars
export default function (h) {
  return () => {
    if (this.count > 0 && this.opts.pagination.dropdown) {
      const perPage = parseInt(this.limit, 10);

      const from = ((this.Page - 1) * perPage) + 1;
      const to = this.Page == this.totalPages
        ? this.count
        : from + perPage - 1;

      const parts = this
        .opts
        .texts
        .count
        .split('|');

      // eslint-disable-next-line no-nested-ternary
      const i = Math.min(this.count == 1
        ? 2
        : this.totalPages == 1
          ? 1
          : 0, parts.length - 1);

      const count = parts[i]
        .replace('{count}', this.count)
        .replace('{from}', from)
        .replace('{to}', to);

      return <div class="VuePagination">
        <p class="VuePagination__count">{count}</p>
      </div>;
    }

    return '';
  };
}
