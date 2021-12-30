import scrollTarget from './scrollTarget';

export default function hashScroll() {
  const { documentElement } = document;
  const protocolRegexp = /^(https?:|file:\/)\/\//;
  const currentAnchor = window.location.href.split('#');

  documentElement.addEventListener('click', (event) => {
    const eventElement = event.target.closest('a[href]');

    if (eventElement !== null && protocolRegexp.test(eventElement.href)) {
      const thisAnchor = eventElement.href.split('#');
      const targetElement =
        currentAnchor[0] === thisAnchor[0] && thisAnchor.length > 1
          ? document.getElementById(thisAnchor[1])
          : null;

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        eventElement.target === '_blank' ||
        targetElement === null
      ) {
        return;
      }
      scrollTarget(targetElement, 500);
      event.preventDefault();
    }
  });
  window.addEventListener('load', () => {
    const { hash } = window.location;
    const targetElement = hash ? document.getElementById(hash.substring(1)) : null;

    if (targetElement !== null) {
      scrollTarget(targetElement, 500);
      if ('replaceState' in window.history) {
        window.history.replaceState(
          '',
          document.title,
          window.location.pathname + window.location.search,
        );
      }
    }
  });
}
