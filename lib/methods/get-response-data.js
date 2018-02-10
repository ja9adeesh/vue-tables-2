export default response => {
  if (typeof axios !== 'undefined') {
    return response.data;
  }

  return response;
};
