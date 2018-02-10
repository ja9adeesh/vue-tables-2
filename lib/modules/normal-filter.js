import debounce from 'debounce';

// eslint-disable-next-line no-unused-vars
export default function (h) {
  return ({
    input,
    small
  }, id) => {
    const search = this.source === 'client'
      ? this
        .search
        .bind(this, this.data)
      : this
        .serverSearch
        .bind(this);

    return (<input
      class={`${input} ${small}`}
      type="text"
      value={this.query}
      placeholder={this.display('filterPlaceholder')}
      on-keyup={debounce(search, this.opts.debounce)}
      id={id}/>);
  };
}