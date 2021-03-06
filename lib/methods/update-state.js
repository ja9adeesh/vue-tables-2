export default function (key, value) {
  if (!this.opts.saveState || !this.activeState) {
    return;
  }
  let currentState;
  try {
    currentState = JSON.parse(this.storage.getItem(this.stateKey));
  } catch (e) {
    currentState = this.initState();
  }

  currentState[key] = value;

  this
    .storage
    .setItem(this.stateKey, JSON.stringify(currentState));
}
