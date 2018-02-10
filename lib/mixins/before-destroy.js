import EventBus from '../bus';

export default function () {
  let el;

  EventBus.$off();
  EventBus.$destroy();

  if (this.vuex && !this.opts.preserveState) {
    this
      .$store
      .unregisterModule(this.name);
  }

  if (this.opts.filterByColumn) {
    this
      .opts
      .dateColumns
      .forEach(column => {
        el = $(this.$el)
          .find(`#vue-table-${column}-filter`)
          .data('daterangepicker');
        if (el) {
          el.remove();
        }
      });
  }
}