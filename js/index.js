document.addEventListener("DOMContentLoaded", function() {
  const section2 = document.querySelector(".sec-2");
  const section2Img = document.querySelector(".js-img-slide");

  const section4 = document.querySelector(".sec-4");
  const section4Img = document.querySelector(".js-img-enlarge");

  let controller = new ScrollMagic.Controller();

  let tl1 = new TimelineMax();

  tl1.from(section2Img, 0.7, { x: "-100%" });

  let sec2Scene = new ScrollMagic.Scene({
    triggerElement: section2,
    duration: 0,
    reverse: false
  })
    .setTween(tl1)
    // .addIndicators()
    .addTo(controller);

  let tl2 = new TimelineMax();

  tl2.from(section4Img, 0.8, { scale: 0.5 });

  let sec4Scene = new ScrollMagic.Scene({
    triggerElement: section4,
    duration: 0,
    reverse: false
  })
    .setTween(tl2)
    // .addIndicators()
    .addTo(controller);
});
