export default {
  twoWay: true,
  bind(el, {
    value
  }, {context}) {
    el
      .addEventListener('change', function ({target}) {
        console.log('SELECT CHANGE');
        context[value.name] = target.value;
        value
          .cb
          .call(this, value.params);
      });
  },

  update(el, binding, vnode, oldVnode) {
    // el.value = vnode.context[binding.value]; console.log(binding.value + " was
    // updated");  vnode.context[binding.value] = el.value;

  }

};
