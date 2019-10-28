import "owl.carousel";

export function init_carousel() {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    items: 1
  });
}
