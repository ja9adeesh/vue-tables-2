import fnDefaults from '../config/defaults';

export default function () {
  const defaults = fnDefaults();
  return this.initOptions(defaults, this.globalOptions, this.options);
}
