export default obj => {
  const keys = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      keys.push(prop);
    }
  }
  return keys;
};
