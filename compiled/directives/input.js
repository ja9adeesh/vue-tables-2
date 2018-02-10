'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  twoWay: true,
  bind: function bind(el, _ref, _ref2) {
    var value = _ref.value;
    var context = _ref2.context;

    el.addEventListener('keydown', function (_ref3) {
      var target = _ref3.target;

      context[value] = target.value;
    });
  },
  update: function update(el, binding, vnode, oldVnode) {}
};
module.exports = exports['default'];