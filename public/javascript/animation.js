const animationWelcome = document.querySelector(".animation-welcome");
const animationInfo = document.querySelector(".animation-info");

const tl = new TimelineMax();

tl.fromTo(
  animationWelcome,
  1.5,
  { opacity: 0, x: 30 },
  { opacity: 1, x: 0 }
).fromTo(animationInfo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
