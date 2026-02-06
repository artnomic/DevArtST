gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animatePage() {
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.to("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.to("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  gsap.from(".city", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cities__cards",
      scrub: true,
      start: "top 80%",
      end: "100% 70%",
    },
  });

  gsap.from(".thanks ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".thanks ul",
      scrub: 2,
      start: "top 80%",
      end: "100% 50%",
    },
  });

  gsap.from("footer", {
    y: "-5%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  allTextSplit = document.querySelectorAll(".text--is-split");

  allTextSplit.forEach((text) => {
    const split = SplitText.create(text, {
      type: "lines, words,chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.03,
      duration: 0.3,
      scrollTrigger: {
        trigger: text,
      },
    });
  });
}
const tl = gsap.timeline({
  onComplete() {
    animatePage();
    gsap.to("#logo__preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#logo__preloader path", {
  strokeDashoffset: 0,
  duration: 1,
}).to("#logo__preloader path", {
  fill: "rgb(168, 19, 19)",
  strokeDashoffset: 0,
  duration: 0.5,
});
