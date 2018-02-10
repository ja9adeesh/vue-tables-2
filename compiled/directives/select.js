'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  twoWay: true,
  bind: function bind(el, _ref, _ref2) {
    var value = _ref.value;
    var context = _ref2.context;

    el.addEventListener('change', function (_ref3) {
      var target = _ref3.target;

      console.log('SELECT CHANGE');
      context[value.name] = target.value;
      value.cb.call(this, value.params);
    });
  },
  update: function update(el, binding, vnode, oldVnode) {
    // el.value = vnode.context[binding.value]; console.log(binding.value + " was
    // updated");  vnode.context[binding.value] = el.value;

  }
};
module.exports = exports['default'];