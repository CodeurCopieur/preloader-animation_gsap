const timeline = gsap.timeline();
// au bout de 3s élément h1 disparait
timeline.to('.animate', {
  delay: 3,
  duration: .5,
  opacity: 0
});
// au bout de 1s élément .animation se decplace vers le bas
timeline.to('.animation', {
  delay: 1,
  duration: 1,
  y: "100%",
  ease: "power4.out"
});

timeline.to('.animation', {
  zIndex: -1
});

timeline.from('.container h1', {
  delay: .5,
  duration: .8,
  skewY: 10,
  y: 100,
  x: -199,
  opacity: 0
});