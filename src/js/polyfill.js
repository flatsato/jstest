// forked from
// https://developer.mozilla.org/ja/docs/Web/API/Element/matches

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// forked from
// https://developer.mozilla.org/ja/docs/Web/API/Element/closest

if (!Element.prototype.closest) {
  Element.prototype.closest = function closest(s) {
    let el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
