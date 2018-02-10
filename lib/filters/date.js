import is_valid_moment_object from '../helpers/is-valid-moment-object';

export default function (property) {
  if (is_valid_moment_object(property)) {
    return property.format(this.opts.dateFormat);
  }

  return property;
}
