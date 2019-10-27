export function init_scroll() {
  var width = $(window).width();
  var scroll_position = $(window).scrollTop();

  scroll();
  if (width <= 991) {
  } else {
    if (scroll_position > 10) {
      $("header").addClass("scroll");
    } else {
    }
  }
}

$(window).resize(function() {
  init_scroll(false);
});

function scroll() {
  var scroll_status = true;
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var width = $(window).width();

    if (width > 991) {
      if (scroll > 10) {
        if (scroll_status) {
          $("header").addClass("scroll");
        }
        scroll_status = false;
      } else {
        if (!scroll_status) {
          $("header").removeClass("scroll");
          scroll_status = true;
        }
      }
    }
  });
}
