//SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);

const boddy = document.querySelector(".SpriteSheet");
const sprite = gsap.to(
  ".SpriteSheet",

  {
    scrollTrigger: {
      trigger: ".SpriteSheet",
      markers: true,
      pin: true,
      start: "center 75%",
      end: "bottom 25%",
      toggleActions: "reset",
      onUpdate(e) {
        windows.addEventListener("scroll", function () {
          boddy.classList.add("is-scrolling");

          sprite.play();
        });
        window.setInterval(function () {
          boddy.classList.remove("is-scrolling");
        }, 100);
      },
      x: "1000px",
      duration: 10,
    },
  }
);

/*

const boddy2 = document.querySelector(".SpriteSheet2");
const sprite2 = gsap.to(
  ".SpriteSheet2",

  {
    scrollTrigger: {
      trigger: ".SpriteSheet2",
      markers: true,
      start: "center 75%",
      end: "bottom 15%",
      toggleActions: "reset",
      onUpdate(e) {
        windows.addEventListener("scroll", function () {
          boddy2.classList.add("is-scrolling");

          sprite2.play();
        });
        window.setInterval(function () {
          boddy2.classList.remove("is-scrolling");
        }, 100);
      },
      x: "1000px",
      duration: 10,
    },
  }
);


*/

/*
const boddy2 = document.querySelector(".SpriteSheet2");
const sprite2 = gsap.fromTo(
  ".SpriteSheet2",
  {
    x: "-600px",
  },
  { toggleActions: "restart complete reverse reset", x: "1000px", duration: 10 }
);

const tombe = gsap.to(".tombe1", { rotation: 1400, duration: 50, y: 500 });

window.addEventListener("scroll", function () {
  boddy.classList.add("is-scrolling");
  boddy2.classList.add("is-scrolling2");
  /// sprite.play();
  /// sprite2.play();
  /// tl.restart();
  ////tombe.restart();
  ///tl2.restart();
  ////tl3.restart();
  ///oiseauAnim.play();
});

const Minuteur = window.setInterval(function () {
  boddy.classList.remove("is-scrolling");
  boddy2.classList.remove("is-scrolling2");
  /// sprite.pause();
  /// sprite2.pause();
  //oiseauAnim.pause();
}, 100);
*/

//ANIMATIONS

/*const etoilesAnim = gsap.fromTo(
  "#etoile1",
  {
    x: "-600px",
  },
  { x: "1000px", duration: 5 }
);

function doFade() {
  var tl = gsap.timeline();
  var Etoiles = document.querySelector(".Etoiles");
  tl.to(Etoiles, { opacity: 0, duration: 3 });
  Etoiles.className = "red";

  tl.to(Etoiles, { opacity: 100, duration: 3, delay: 1 });
}*/

/*

const tl = gsap
  .timeline({
    paused: false,
    defaults: { duration: 0.3 },
    trigger: ".chapitre3",
    start: "top center",
    end: "top top",
    scrub: true,
    markers: true,
  })
  .to("#etoile1", { opacity: 0 })
  .set("#etoile1", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile1", { opacity: 1 }, "+=1")

  .to("#etoile8", { opacity: 0 })
  .set("#etoile8", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile8", { opacity: 1 }, "+=1")

  .to("#etoile3", { opacity: 0 })
  .set("#etoile3", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile3", { opacity: 1 }, "+=1")

  .to("#etoile5", { opacity: 0 })
  .set("#etoile5", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile5", { opacity: 1 }, "+=1")

  .to("#etoile14", { opacity: 0 })
  .set("#etoile14", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile14", { opacity: 1 }, "+=1")

  .to("#etoile2", { opacity: 0 })
  .set("#etoile2", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile2", { opacity: 1 }, "+=1")

  .to("#etoile10", { opacity: 0 })
  .set("#etoile10", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile10", { opacity: 1 }, "+=1")

  .to("#etoile7", { opacity: 0 })
  .set("#etoile7", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile7", { opacity: 1 }, "+=1")

  .to("#etoile15", { opacity: 0 })
  .set("#etoile15", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile15", { opacity: 1 }, "+=1")

  .to("#etoile4", { opacity: 0 })
  .set("#etoile4", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile4", { opacity: 1 }, "+=1")

  .to("#etoile9", { opacity: 0 })
  .set("#etoile9", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile9", { opacity: 1 }, "+=1")

  .to("#etoile11", { opacity: 0 })
  .set("#etoile11", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile11", { opacity: 1 }, "+=1")

  .to("#etoile6", { opacity: 0 })
  .set("#etoile6", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile6", { opacity: 1 }, "+=1")

  .to("#etoile13", { opacity: 0 })
  .set("#etoile13", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile13", { opacity: 1 }, "+=1")

  .to("#etoile16", { opacity: 0 })
  .set("#etoile16", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile16", { opacity: 1 }, "+=1")

  .to("#etoile12", { opacity: 0 })
  .set("#etoile12", { backgroundColor: "#6adae400" }, { opacity: 1 }, "+=1")
  .to("#etoile12", { opacity: 1 }, "+=1");

const tl2 = gsap
  .timeline({
    paused: true,
    defaults: { duration: 0.1 },
  })
  .to("#nuage2", { opacity: 0 })
  .to("#nuage1", { y: -900, duration: 5, opacity: 0 })

  .to("#nuage2", { opacity: 1 })
  .to("#nuage2", { y: -900, duration: 4, opacity: 0 })

  .to("#nuage3", { x: 0, x: 500, duration: 6, opacity: 0 })

  .to("#nuage4", { x: 0, x: -500, duration: 7, opacity: 0 })

  .to("#nuage5", { x: 0, x: 200, duration: 6, opacity: 0 });

const tl3 = gsap
  .timeline({
    paused: true,
    defaults: { duration: 1 },
  })
  .to("#tomber2", { opacity: 1, duration: 2, opacity: 0 })

  .to("#flotte", { opacity: 1, duration: 3, opacity: 1 });

const oiseauAnim = gsap.fromTo(
  "#oiseau",
  {
    x: "-600px",
  },
  { x: "1000px", duration: 5 }
);

const AnimBallon = gsap.to(
  "#ballon",

  {
    scale: 1.5,
    duration: 5,
    toggleActions: "restart complete reverse reset",
    scrollTrigger: {
      trigger: "img",

      start: "bottom bottom",
    },
  }
);
*/
