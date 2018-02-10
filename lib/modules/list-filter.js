export default function (h, selectClass) {
  return (column) => {
    const options = [];
    let selected;

    const search = this.source === 'client'
      ? this
        .search
        .bind(this, this.data)
      : this
        .serverSearch
        .bind(this);

    const displayable = this
      .opts
      .listColumns[column]
      .filter(({hide}) => !hide);

    displayable.map(({id, text}) => {
      selected = id === this.query[column] && this.query[column] !== '';
      options.push(
        <option value={id} selected={selected}>{text}</option>
      );
    });

    return (
      <div class="vue-table-list-filter" id={`vue-table-${column}-filter`}>
        <select
          class={selectClass}
          on-change={search}
          name={`vf__${column}`}
          value={this.query[column]}>
          <option value="">{this.display('defaultOption', {
            column: this.opts.headings[column]
              ? this.opts.headings[column]
              : column
          })}</option>
          {options}
        </select>
      </div>
    );
  };
}
