export default function (text, replacements) {
  if (!this.opts.texts) {
    return '';
  }

  let _text = this.opts.texts[text];

  if (replacements) {
    for (const key in replacements) {
      if (replacements.hasOwnProperty(key)) {
        // console.log(key)
        _text = text.replace(`{${key}}`, replacements[key]);
      }
    }
  }

  return _text;
}
