export function init_menu() {
  $(document).on("click", ".menu-mobile", function() {
    $(this).toggleClass("active", "active");
    $(".display-menu").toggleClass("active", "active");
  });
}
