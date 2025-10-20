console.log("Home frontend javascript file");

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    let pad = padding || 0,
      parentEl = el.parentNode,
      elOffsetWidth = el.offsetWidth - pad,
      parentOffsetWidth = parentEl.offsetWidth,
      ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }

  resize();
  window.addEventListener("resize", resize);
}


//  KALEIDOSCOPE ANIMATION
(function () {
  const kaleidoscopeEl = document.querySelector('.kaleidoscope-animation');
  
  if (!kaleidoscopeEl) return;

  // Animate circles - pulsing and color change
  anime({
    targets: '.circle',
    scale: [
      {value: 1},
      {value: 1.3},
      {value: 1}
    ],
    duration: 3000,
    delay: anime.stagger(300),
    easing: 'easeInOutQuad',
    loop: true
  });

  // Animate squares - rotation
  anime({
    targets: '.square-1',
    rotate: 360,
    duration: 4000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.square-2',
    rotate: -360,
    duration: 5000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.square-3',
    rotate: 360,
    duration: 6000,
    easing: 'linear',
    loop: true
  });

  // Animate triangles - rotation opposite direction
  anime({
    targets: '.triangle-1',
    rotate: -360,
    duration: 5000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.triangle-2',
    rotate: 360,
    duration: 6000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.triangle-3',
    rotate: -360,
    duration: 7000,
    easing: 'linear',
    loop: true
  });

  // Animate star points - orbital rotation
  anime({
    targets: '.star-point',
    rotate: 360,
    duration: 8000,
    delay: anime.stagger(100),
    easing: 'linear',
    loop: true
  });

  // Color cycling for circles
  anime({
    targets: '.circle-1',
    opacity: [0.7, 0.3, 0.7],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true
  });

  anime({
    targets: '.circle-2',
    opacity: [0.7, 0.3, 0.7],
    duration: 2500,
    easing: 'easeInOutSine',
    loop: true
  });

  anime({
    targets: '.circle-3',
    opacity: [0.7, 0.3, 0.7],
    duration: 3000,
    easing: 'easeInOutSine',
    loop: true
  });

  // Star points pulsing
  anime({
    targets: '.star-point',
    scale: [
      {value: 1},
      {value: 1.5},
      {value: 1}
    ],
    duration: 1500,
    delay: anime.stagger(200, {from: 'center'}),
    easing: 'easeInOutQuad',
    loop: true
  });
})();