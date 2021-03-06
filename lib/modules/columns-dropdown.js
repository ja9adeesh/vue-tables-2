import dropdownWrapper from './dropdown-wrapper';
import dropdownItemWrapper from './dropdown-item-wrapper';

export default function (h) {
  return (classes) => {
    const cols = this
      .columns
      .map(column => {
        return dropdownItemWrapper(h, classes, (
          <a class={classes.dropdown.item} href="#">
            <input
              type="checkbox"
              value={column}
              disabled={this._onlyColumn(column)}
              on-change={this
                .toggleColumn
                .bind(this, column)}
              checked={this
                .allColumns
                .includes(column)}/> {this.getHeading(column)}
          </a>
        ));
      });

    return <div
      class={`${classes.dropdown.container} ${classes.right} vue-table-columns-dropdown`}>
      <button
        type="button"
        class={`${classes.button} ${classes.dropdown.trigger}`}
        on-click={this
          ._toggleColumnsDropdown
          .bind(this)}>
        {this.display('columns')}
        <span class={`${classes.icon} ${classes.small}`}>
          <i class={classes.dropdown.caret}></i>
        </span>
      </button>

      {dropdownWrapper.call(this, h, classes, cols)}

    </div>;
  };
}