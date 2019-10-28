export function init_acordion() {
  $(document).on("click", ".box", function() {
    if ($(this).hasClass("active")) {
      $(".acordion .box").removeClass("active");
    } else {
      $(".acordion .box").removeClass("active");
      console.log($(this));
      $(this).addClass("active");
    }
  });
}
