//SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const boddy = document.querySelector(".SpriteSheet");
const sprite = gsap.fromTo(
  ".SpriteSheet",

  {
    scrollTrigger: {
      trigger: ".SpriteSheet",
      //markers: true,
      pin: true,
      pinSpacing: false,
      start: "top center",
      end: "bottom bottom",
      toggleActions: "restart pause resume pause",
      onUpdate: (e) => {
        window.addEventListener("scroll", function () {
          boddy.classList.add("is-scrolling");
          sprite.play();
        });
        window.setInterval(function () {
          boddy.classList.remove("is-scrolling");
        }, 100);
      },
      x: "-600px",
    },
  },
  { x: "1500px", duration: 20 }
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

gsap.to("#rond", {
  duration: 5,
  morphSVG: {
    shape: "#coeur",
    shapeIndex: 5,
  },
});

function findShapeIndex(target, endShape, vars) {
  vars = vars || {};
  var _doc = document,
    _get = function (e) {
      return _doc.querySelectorAll(e);
    },
    _createSVG = function (type, attributes) {
      var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
        reg = /([a-z])([A-Z])/g,
        p;
      for (p in attributes) {
        element.setAttributeNS(
          null,
          p.replace(reg, "$1-$2").toLowerCase(),
          attributes[p]
        );
      }
      return element;
    },
    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
    _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/gi,
    _parseShape = (shape, forcePath, target) => {
      let isString = typeof shape === "string",
        e,
        type;
      if (
        !isString ||
        _selectorExp.test(shape) ||
        (shape.match(_numExp) || []).length < 3
      ) {
        e = gsap.utils.toArray(shape)[0];
        if (e) {
          type = (e.nodeName + "").toUpperCase();
          if (forcePath && type !== "PATH") {
            //if we were passed an element (or selector text for an element) that isn't a path, convert it.
            e = MorphSVGPlugin.convertToPath(e, false);
            type = "PATH";
          }
          shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";
          if (e === target) {
            //if the shape matches the target element, the user wants to revert to the original which should have been stored in the data-original attribute
            shape = e.getAttributeNS(null, "data-original") || shape;
          }
        } else {
          console.warn("Invalid morph to: " + shape);
          shape = false;
        }
      }
      return shape;
    },
    startDot,
    endDot,
    incrementButton,
    decrementButton,
    _setup = function () {
      var e = _doc.createElement("div"),
        label = _doc.createElement("div"),
        body = _get("body")[0];
      incrementButton = _doc.createElement("div");
      decrementButton = _doc.createElement("div");
      label.setAttribute("id", "shapeIndexLabel");
      startDot = _createSVG("circle", {
        cx: 0,
        cy: 0,
        r: (vars.startStrokeWidth || 3) + 3,
        fill: vars.startStroke || "red",
      });
      endDot = _createSVG("circle", {
        cx: 0,
        cy: 0,
        r: (vars.endStrokeWidth || 3) + 3,
        fill: vars.endStroke || "yellow",
      });
      gsap.set(e, {
        padding: "0px",
        position: "absolute",
        bottom: 0,
        fontSize: "20px",
        textAlign: "center",
        backgroundColor: "black",
        color: "#91e600",
        border: "1px solid #999",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        userSelect: "none",
        fontFamily: "sans-serif",
        zIndex: 100,
      });
      gsap.set(label, {
        display: "inline-block",
        minWidth: "210px",
        marginRight: "10px",
        textAlign: "center",
        marginLeft: "10px",
      });
      gsap.set([incrementButton, decrementButton], {
        display: "inline-block",
        padding: "0 15px",
        color: "#ccc",
        height: "50px",
        lineHeight: "48px",
        cursor: "pointer",
      });
      gsap.set(decrementButton, { borderRight: "1px solid #999" });
      gsap.set(incrementButton, { borderLeft: "1px solid #999" });
      decrementButton.innerHTML = " - ";
      incrementButton.innerHTML = " + ";
      e.appendChild(decrementButton);
      e.appendChild(label);
      e.appendChild(incrementButton);
      if (body) {
        body.appendChild(e);
      }
      return label;
    },
    label = _get("#shapeIndexLabel")[0] || _setup(),
    index = 0,
    _yoyo = function () {
      shapeTween.reversed(!shapeTween.reversed()).resume();
      dotTween.reversed(!dotTween.reversed()).resume();
    },
    shapeTween,
    dotTween,
    startBezier,
    endBezier,
    dotProxy = { x: 0, y: 0 },
    _getFirstCoordinates = function (start, end, shapeIndex) {
      startBezier = MorphSVGPlugin.stringToRawPath(start);
      endBezier = MorphSVGPlugin.stringToRawPath(end);
      MorphSVGPlugin.equalizeSegmentQuantity(
        startBezier,
        endBezier,
        shapeIndex
      );
      return [
        startBezier[0][0],
        startBezier[0][1],
        endBezier[0][0],
        endBezier[0][1],
      ];
    },
    _startTween = function () {
      var coordinates = _getFirstCoordinates(
        origStartShape,
        origEndShape,
        index
      );
      dotProxy.x = coordinates[0];
      dotProxy.y = coordinates[1];
      startDot.setAttribute("cx", dotProxy.x);
      startDot.setAttribute("cy", dotProxy.y);
      endDot.setAttribute("cx", coordinates[2]);
      endDot.setAttribute("cy", coordinates[3]);
      shapeTween = gsap.fromTo(
        target,
        { morphSVG: origStartShape },
        {
          delay: 0.5,
          duration: vars.duration || 3,
          morphSVG: { shape: origEndShape, shapeIndex: index },
          ease: vars.ease || "none",
          onComplete: _yoyo,
          onReverseComplete: _yoyo,
          overwrite: true,
        }
      );
      dotTween = gsap.to(dotProxy, {
        delay: 0.5,
        duration: vars.duration || 3,
        x: coordinates[2],
        y: coordinates[3],
        ease: vars.ease || "none",
        onUpdate: function () {
          startDot.setAttribute("cx", dotProxy.x);
          startDot.setAttribute("cy", dotProxy.y);
        },
      });
    },
    _refresh = function () {
      label.innerHTML =
        "shapeIndex: " + index + (index === autoIndex ? " (auto)" : "");
      shapeTween.seek(0).kill();
      dotTween.seek(0).kill();
      _startTween();
      gsap.fromTo(
        label.parentNode,
        0.4,
        { backgroundColor: "#777" },
        { backgroundColor: "black", ease: "none" }
      );
    },
    _increment = function () {
      index = (index + 1) % (maxIndex + 1);
      _refresh();
    },
    _decrement = function () {
      index = (index - 1) % (maxIndex + 1);
      _refresh();
    },
    autoIndex,
    maxIndex,
    endTarget;
  if (typeof target === "string") {
    target = gsap.utils.toArray(target)[0];
  }
  if (!target) {
    console.log(
      "ERROR: target not found for findShapeIndex(). Please use a valid target."
    );
    return;
  } else if (target.nodeName && target.nodeName.toUpperCase() !== "PATH") {
    console.log("ERROR: target of findShapeIndex() must be a path.");
    return;
  } else if (target.push && target[0] && target[0].nodeName) {
    target = target[0];
  }
  if (target.parentNode) {
    target.parentNode.appendChild(endDot);
    target.parentNode.appendChild(startDot);
  }
  if (
    typeof endShape !== "string" ||
    (endShape.match(_numExp) || []).length < 3
  ) {
    endTarget = gsap.utils.toArray(endShape);
    if (endTarget && endTarget[0]) {
      endTarget = endTarget[0];
      gsap.set(endTarget, {
        display: "block",
        strokeWidth: vars.endStrokeWidth || 3,
        stroke: vars.endStroke || "yellow",
        fill: vars.endFill || "none",
        visibility: "visible",
        opacity: vars.endOpacity || 0.7,
      });
    }
  }
  gsap.set(target, {
    display: "block",
    strokeWidth: vars.startStrokeWidth || 3,
    stroke: vars.startStroke || "red",
    fill: vars.startFill || "none",
    visibility: "visible",
    opacity: vars.startOpacity || 0.7,
  });
  startBezier = MorphSVGPlugin.stringToRawPath(target.getAttribute("d"));
  endBezier = MorphSVGPlugin.stringToRawPath(_parseShape(endShape, true));
  autoIndex = index = Math.round(
    MorphSVGPlugin.equalizeSegmentQuantity(startBezier, endBezier, "auto")[0]
  ); //also handles subdividing!
  maxIndex = (startBezier[0].length / 6) | 0;
  gsap.killTweensOf([target, endShape]); //kill other tweens so they don't interfere with our yoyo-ing one.

  const origStartShape = _parseShape(target, true);
  const origEndShape = _parseShape(endShape, true);
  _startTween();
  label.innerHTML =
    "shapeIndex: " + index + (index === autoIndex ? " (auto)" : "");
  window.addEventListener("keydown", function (event) {
    var key = event.keyCode;
    if (key === 38 || key === 39 || key === 85) {
      //right or up arrows (increment)
      _increment();
    } else if (key === 37 || key === 40 || key === 68) {
      //left or down arrows (decrement)
      _decrement();
    }
  });
  incrementButton.addEventListener("click", _increment);
  decrementButton.addEventListener("click", _decrement);
}

gsap.from(".flower", {
  duration: 5,
  drawSVG: "0%",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".flower",
    markers: true,
    scrub: 1,
    start: "center center",
    end: "bottom center",
    pin: "#svg",
  },
});

gsap.to("#Ballonn", {
  duration: 10,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: false,
  },
});

MotionPathHelper.create("#Ballonn");
