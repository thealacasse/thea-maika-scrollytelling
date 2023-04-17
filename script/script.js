const sprite = gsap.fromTo(
  ".SpriteSheet",
  {
    x: "-600px",
  },
  { toggleActions: "restart complete reverse reset", x: "100px", duration: 10 }
);

let body = document.querySelector("body");
window.addEventListener(
  "scroll",
  function () {
    body.classList.add("is-crolling");
    sprite.play();
  },
  100
);
const Minuteur = window.setInterval(function () {
  body.classList.remove("is-scrolling");
  sprite.pause();
});
