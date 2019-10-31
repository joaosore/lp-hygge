import ScrollReveal from "scrollreveal";

export function init_animation() {
  ScrollReveal().reveal("section", {
    delay: 375,
    duration: 500,
    opacity: 0,
    interval: 150
  });
}
