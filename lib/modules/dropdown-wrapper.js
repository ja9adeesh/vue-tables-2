export default function (h, {
  framework,
  dropdown
}, columns) {
  if (framework === 'bulma') {
    return (
      <div
        class={dropdown.menu}
        style={this.displayColumnsDropdown
          ? 'display:block'
          : 'display:none'}>
        <div class={dropdown.content}>{columns}</div>
      </div>
    );
  }

  if (framework === 'bootstrap4') {
    return <div
      class={dropdown.menu}
      style={this.displayColumnsDropdown
        ? 'display:block'
        : 'display:none'}>{columns}</div>;
  }

  return <ul
    class={dropdown.menu}
    style={this.displayColumnsDropdown
      ? 'display:block'
      : 'display:none'}>{columns}</ul>;
}