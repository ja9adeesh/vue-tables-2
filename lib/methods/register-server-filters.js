import bus from '../bus';

export default function () {
  let event = 'vue-tables';
  if (this.name) {
    event += `.${this.name}`;
  }

  this
    .opts
    .customFilters
    .forEach(filter => {
      bus.$off(`${event}.filter::${filter}`);
      bus.$on(`${event}.filter::${filter}`, value => {
        this.customQueries[filter] = value;
        this.updateState('customQueries', this.customQueries);
        this.refresh();
      });
    });
}
