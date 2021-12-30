export default function changeMetaViewport() {
  const metaViewport = document.querySelector('meta[name="viewport"]');
  if (!metaViewport) return;

  function changeMetaViewportContent() {
    const deviceWidth = 375;
    let metaViewportContent = 'width=device-width, initial-scale=1';
    if (window.outerWidth < deviceWidth) {
      metaViewportContent = `width=${deviceWidth}`;
    }
    metaViewport.setAttribute('content', metaViewportContent);
  }

  window.addEventListener('resize', () => {
    changeMetaViewportContent();
  });
  changeMetaViewportContent();
}
