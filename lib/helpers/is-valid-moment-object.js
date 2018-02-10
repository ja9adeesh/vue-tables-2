export default val => val && typeof val.isValid === 'function' && val.isValid();
