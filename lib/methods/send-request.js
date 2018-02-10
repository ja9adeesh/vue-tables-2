export default function (data) {
  if (typeof this.opts.requestFunction === 'function') {
    return this
      .opts
      .requestFunction
      .call(this, data);
  }

  if (typeof axios !== 'undefined') {
    return axios
      .get(this.url, {params: data})
      .catch(e => {
        this.dispatch('error', e);
      });
  }

  if (typeof this.$http !== 'undefined') {
    return this
      .$http
      .get(this.url, {params: data})
      .then(data => data.json(), e => {
        this.dispatch('error', e);
      });
  }

  if (typeof $ !== 'undefined') {
    return $
      .getJSON(this.url, data)
      .fail(e => {
        this.dispatch('error', e);
      });
  }

  throw 'vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource)' +
    '. To use a different library you can write your own request function (see the `r' +
      'equestFunction` option)';
}
