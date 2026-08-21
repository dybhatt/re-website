(function () {
  var bar = document.querySelector('.sticky-bar');
  if (!bar) return;
  var threshold = 420;
  function onScroll() {
    var show = window.scrollY > threshold;
    bar.classList.toggle('is-visible', show);
    document.body.classList.toggle('has-sticky-bar', show);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
