export default name => {
  if (!name) {
    return name;
  }

  name = name.split('__');
  name.shift();

  return name.join('__');
};
