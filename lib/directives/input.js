export default {
  twoWay: true,
  bind(el, {
    value
  }, {context}) {
    el.addEventListener('keydown', ({target}) => {
      context[value] = target.value;
    });
  },

  update(el, binding, vnode, oldVnode) {}

};
