import validMoment from '../helpers/is-valid-moment-object';

export default function (value, dateFormat) {
  if (!validMoment(value)) {
    return value;
  }

  return value.format(dateFormat);
}
