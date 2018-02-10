export default function (column, value) {
  const datepicker = window.$(this.$el).find(`#vue-table-${column}-filter`);
  const text = value
    ? `${window.moment(value.start, 'YYYY-MM-DD HH:mm:ss').format(this.opts.dateFormat)} - ${window.moment(value.end, 'YYYY-MM-DD HH:mm:ss').format(this.opts.dateFormat)}`
    : this
      .opts
      .texts
      .filterBy
      .replace('{column}', column);
  datepicker.text(text);
}
