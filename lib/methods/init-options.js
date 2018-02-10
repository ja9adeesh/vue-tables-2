import merge from 'merge';

export default (defaults, globalOptions, localOptions) => {
  if (globalOptions) {
    defaults = merge.recursive(defaults, globalOptions);
  }

  localOptions = merge.recursive(defaults, localOptions);

  return localOptions;
};
