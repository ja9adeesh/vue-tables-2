"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (key, value) {
  if (!this.opts.saveState || !this.activeState) {
    return;
  }
  var currentState = void 0;
  try {
    currentState = JSON.parse(this.storage.getItem(this.stateKey));
  } catch (e) {
    currentState = this.initState();
  }

  currentState[key] = value;

  this.storage.setItem(this.stateKey, JSON.stringify(currentState));
};

module.exports = exports["default"];