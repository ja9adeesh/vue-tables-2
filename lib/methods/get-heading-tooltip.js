export default function (value, h) {
  if (typeof value !== 'string') {
    return '';
  }

  const derivedHeadingTooltip = '';

  if (!this.opts.headingsTooltips.hasOwnProperty(value)) {
    return derivedHeadingTooltip;
  }

  if (typeof this.opts.headingsTooltips[value] === 'function') {
    if (h) {
      return this
        .opts
        .headingsTooltips[value]
        .call(this.$parent, h);
    }

    return derivedHeadingTooltip;
  }

  return this.opts.headingsTooltips[value];
}
