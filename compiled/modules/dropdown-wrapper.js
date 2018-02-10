'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, _ref, columns) {
  var framework = _ref.framework,
      dropdown = _ref.dropdown;

  if (framework === 'bulma') {
    return h(
      'div',
      {
        'class': dropdown.menu,
        style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
      [h(
        'div',
        { 'class': dropdown.content },
        [columns]
      )]
    );
  }

  if (framework === 'bootstrap4') {
    return h(
      'div',
      {
        'class': dropdown.menu,
        style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
      [columns]
    );
  }

  return h(
    'ul',
    {
      'class': dropdown.menu,
      style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
    [columns]
  );
};

module.exports = exports['default'];