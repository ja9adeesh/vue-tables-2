'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('../helpers/is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _registerModule = require('../state/register-module');

var _registerModule2 = _interopRequireDefault(_registerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self) {
  if (self.vuex) {
    (0, _registerModule2.default)(self);
  } else {
    self.limit = self.opts.perPage;
  }

  if ((0, _isEmpty2.default)(self.opts.columnsDisplay)) {
    return;
  }

  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);

  addEventListener('resize', function () {
    self.windowWidth = innerWidth;
  });
};

function getColumnsDisplay(columnsDisplay) {
  var res = {};
  var range = void 0;
  var device = void 0;
  var operator = void 0;

  for (var column in columnsDisplay) {
    if (columnsDisplay.hasOwnProperty(column)) {
      operator = getOperator(columnsDisplay[column]);
      try {
        device = getDevice(columnsDisplay[column]);
        range = getRange(device, operator);
        res[column] = range.concat([operator]);
      } catch (err) {
        console.warn('Unknown device ' + device);
      }
    }
  }

  return res;
}

function getRange(device, operator) {
  var devices = {
    desktop: [1024, null],
    tablet: [480, 1024],
    mobile: [0, 480],
    tabletL: [768, 1024],
    tabletP: [480, 768],
    mobileL: [320, 480],
    mobileP: [0, 320]
  };

  switch (operator) {
    case 'min':
      return [devices[device][0], null];
    case 'max':
      return [0, devices[device][1]];
    default:
      return devices[device];
  }
}

function getOperator(val) {
  var pieces = val.split('_');

  if (['not', 'min', 'max'].includes(pieces[0])) {
    return pieces[0];
  }

  return false;
}

function getDevice(val) {
  var pieces = val.split('_');
  return pieces.length > 1 ? pieces[1] : pieces[0];
}
module.exports = exports['default'];