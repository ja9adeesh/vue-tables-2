'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, selectClass) {
  var _this = this;

  return function (column) {
    var options = [];
    var selected = void 0;

    var search = _this.source === 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

    var displayable = _this.opts.listColumns[column].filter(function (_ref) {
      var hide = _ref.hide;
      return !hide;
    });

    displayable.map(function (_ref2) {
      var id = _ref2.id,
          text = _ref2.text;

      selected = id === _this.query[column] && _this.query[column] !== '';
      options.push(h(
        'option',
        {
          domProps: {
            'value': id,
            'selected': selected
          }
        },
        [text]
      ));
    });

    return h(
      'div',
      { 'class': 'vue-table-list-filter', attrs: { id: 'vue-table-' + column + '-filter' }
      },
      [h(
        'select',
        {
          'class': selectClass,
          on: {
            'change': search
          },
          attrs: {
            name: 'vf__' + column
          },
          domProps: {
            'value': _this.query[column]
          }
        },
        [h(
          'option',
          {
            attrs: { value: '' }
          },
          [_this.display('defaultOption', {
            column: _this.opts.headings[column] ? _this.opts.headings[column] : column
          })]
        ), options]
      )]
    );
  };
};

module.exports = exports['default'];