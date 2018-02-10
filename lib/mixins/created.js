import is_empty from '../helpers/is-empty';
import registerVuexModule from '../state/register-module';

export default self => {
  if (self.vuex) {
    registerVuexModule(self);
  } else {
    self.limit = self.opts.perPage;
  }

  if (is_empty(self.opts.columnsDisplay)) {
    return;
  }

  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);

  window.addEventListener('resize', (() => {
    self.windowWidth = window.innerWidth;
  }));
};

function getColumnsDisplay(columnsDisplay) {
  const res = {};
  let range;
  let device;
  let operator;

  for (const column in columnsDisplay) {
    if (columnsDisplay.hasOwnProperty(column)) {
      operator = getOperator(columnsDisplay[column]);
      try {
        device = getDevice(columnsDisplay[column]);
        range = getRange(device, operator);
        res[column] = range.concat([operator]);
      } catch (err) {
        console.warn(`Unknown device ${device}`);
      }
    }
  }

  return res;
}

function getRange(device, operator) {
  const devices = {
    desktop: [
      1024, null
    ],
    tablet: [
      480, 1024
    ],
    mobile: [
      0, 480
    ],
    tabletL: [
      768, 1024
    ],
    tabletP: [
      480, 768
    ],
    mobileL: [
      320, 480
    ],
    mobileP: [0, 320]
  };

  switch (operator) {
  case 'min':
    return [devices[device][0], null];
  case 'max':
    return [0, devices[device][1]
    ];
  default:
    return devices[device];
  }
}

function getOperator(val) {
  const pieces = val.split('_');

  if (['not', 'min', 'max'].includes(pieces[0])) {
    return pieces[0];
  }

  return false;
}

function getDevice(val) {
  const pieces = val.split('_');
  return pieces.length > 1
    ? pieces[1]
    : pieces[0];
}
