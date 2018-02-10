"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  return function (_ref) {
    var groupTr = _ref.groupTr;

    var data = _this.source === 'client' ? _this.filteredData : _this.tableData;

    if (_this.count === 0) {
      // eslint-disable-next-line no-unused-vars
      var colspan = _this.allColumns.length;
      if (_this.hasChildRow) {
        colspan++;
      }

      return h(
        "tr",
        { "class": "vue-table-no-results" },
        [h(
          "td",
          { "class": "text-center", attrs: { colspan: _this.colspan }
          },
          [_this.display(_this.loading ? 'loading' : 'noResults')]
        )]
      );
    }

    var rows = [];
    var columns = void 0;
    var rowKey = _this.opts.uniqueKey;

    var rowClass = void 0;
    var recordCount = (_this.Page - 1) * _this.limit;
    var currentGroup = void 0;

    data.map(function (row, index) {
      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {
        rows.push(h(
          "tr",
          {
            "class": groupTr,
            on: {
              "click": _this._toggleGroupDirection.bind(_this)
            }
          },
          [h(
            "td",
            {
              attrs: { colspan: _this.colspan }
            },
            [row[_this.opts.groupBy]]
          )]
        ));
        currentGroup = row[_this.opts.groupBy];
      }

      index = recordCount + index + 1;

      columns = [];
      var childRowToggler = void 0;

      if (_this.hasChildRow) {
        childRowToggler = h(
          "td",
          null,
          [h("span", {
            on: {
              "click": _this.toggleChildRow.bind(_this, row[rowKey])
            },

            "class": 'vue-table-child-row-toggler ' + _this.childRowTogglerClass(row[rowKey]) })]
        );
        if (_this.opts.childRowTogglerFirst) {
          columns.push(childRowToggler);
        }
      }

      _this.allColumns.map(function (column) {
        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];

        columns.push(h(
          "td",
          { "class": _this.columnClass(column) },
          [rowTemplate ? rowTemplate({ row: row, column: column, index: index }) : _this.render(row, column, index, h)]
        ));
      });

      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) {
        columns.push(childRowToggler);
      }

      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';

      rows.push(h(
        "tr",
        {
          "class": rowClass,
          on: {
            "click": _this.rowWasClicked.bind(_this, row),
            "dblclick": _this.rowWasClicked.bind(_this, row)
          }
        },
        [columns]
      ));

      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h(
        "tr",
        { "class": "vue-table-child-row" },
        [h(
          "td",
          {
            attrs: { colspan: _this.colspan }
          },
          [_this._getChildRowTemplate(h, row)]
        )]
      ) : h());
    });

    return rows;
  };
};

module.exports = exports["default"];