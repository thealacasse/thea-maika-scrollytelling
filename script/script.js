let lastKnownScrollPosition = 0;
let ticking = false;

function minuteur(scrollPos) {
  window.setTimeout(minuteur, 100);

  myVar = setTimeout(minuteur, 100);
  clearTimeout(myVar);

  setTimeout(function (minuteur) {
    $("#square").removeClass("is-scrolling");
  }, 100);
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      minuteur(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
