export default (h, {
  framework
}, item) => {
  if (framework === 'bulma') {
    return item;
  }

  return <li>{item}</li>;
};