export default obj => {
  let count = 0;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const isDateRange = typeof obj[prop] === 'object';
      if (isDateRange || (obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim()))) {
        count++;
      }
    }
  }
  return count;
};
