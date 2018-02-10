import bus from '../bus';

export default function () {
  let event = 'vue-tables';
  if (this.name) {
    event += `.${this.name}`;
  }

  this
    .opts
    .customFilters
    .forEach(({name}) => {
      bus.$off(`${event}.filter::${name}`);
      bus.$on(`${event}.filter::${name}`, value => {
        this.customQueries[name] = value;
        this.updateState('customQueries', this.customQueries);
        this.setPage(1);
        this.search(this.data);
      });
    });
}
