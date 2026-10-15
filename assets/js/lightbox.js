(function () {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const lb = document.getElementById('lightbox');
  if (!items.length || !lb) return;

  const img = lb.querySelector('.lightbox-img');
  const cap = lb.querySelector('.lightbox-caption');
  const count = lb.querySelector('.lightbox-count');
  const btnClose = lb.querySelector('.lightbox-close');
  const btnPrev = lb.querySelector('.lightbox-prev');
  const btnNext = lb.querySelector('.lightbox-next');
  const focusable = [btnClose, btnPrev, btnNext];

  let index = 0;
  let lastFocused = null;

  function show(i) {
    index = (i + items.length) % items.length;
    const thumb = items[index].querySelector('img');
    img.src = thumb.src;
    img.alt = thumb.alt;
    cap.textContent = items[index].querySelector('figcaption').textContent.trim();
    count.textContent = (index + 1) + ' / ' + items.length;

    // Preload neighbours so navigation feels instant
    [index - 1, index + 1].forEach(function (j) {
      new Image().src = items[(j + items.length) % items.length].querySelector('img').src;
    });
  }

  function open(i) {
    lastFocused = document.activeElement;
    lb.hidden = false;
    document.body.classList.add('lightbox-open');
    show(i);
    btnClose.focus();
  }

  function close() {
    lb.hidden = true;
    document.body.classList.remove('lightbox-open');
    img.src = '';
    if (lastFocused) lastFocused.focus();
  }

  // Open from gallery (mouse, touch, keyboard)
  items.forEach(function (item, i) {
    item.addEventListener('click', function () { open(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(i);
      }
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function () { show(index - 1); });
  btnNext.addEventListener('click', function () { show(index + 1); });

  // Click on the dark background (not on the image or buttons) closes
  lb.addEventListener('click', function (e) {
    if (e.target === lb) close();
  });

  // Keyboard: Esc, arrows, and a simple focus trap on Tab
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'Tab') {
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Touch swipe
  let startX = null;
  lb.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(dx > 0 ? index - 1 : index + 1);
  });
})();