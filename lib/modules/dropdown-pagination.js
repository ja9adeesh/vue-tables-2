// eslint-disable-next-line no-unused-vars
import debounce from 'debounce';

// eslint-disable-next-line no-unused-vars
export default function (h) {
  return (selectClass, id) => {
    const pages = [];
    let selected;

    for (let pag = 1; pag <= this.totalPages; pag++) {
      selected = this.page === pag;
      pages.push(
        <option value={pag} selected={selected}>{pag}</option>
      );
    }
    return <select
      class={`${selectClass} dropdown-pagination`}
      v-show={this.totalPages > 1}
      name="page"
      ref="page"
      value={this.page}
      on-change={this
        .setPage
        .bind(this, null, false)}
      id={id}>
      {pages}
    </select>;
  };
}
