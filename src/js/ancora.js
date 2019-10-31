export function init_ancora() {
  var $doc = $("html, body");
  $("a").click(function(e) {
    $(".menu-mobile").removeClass("active");
    $(".collapse").removeClass("active");

    $(".nav-item").removeClass("active");
    $(this)
      .parent()
      .addClass("active");

    if ($.attr(this, "href").charAt(0) === "#") {
      var el = $("body").find($.attr(this, "href"));
      if ($(el).length > 0) {
        var i = 0;

        $doc.animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top - i
          },
          500
        );
        window.location.hash = $.attr(this, "href");
        return false;
      }
    }
  });
}
