export function init_scroll() {
  var width = $(window).width();
  var scroll_position = $(window).scrollTop();

  scroll();
  if (width <= 991) {
    if ($(".nav-link").hasClass("contato")) {
      $(".logo").attr("data", "./imgs/logo.svg");
    }
  } else {
    if ($(".nav-link").hasClass("contato")) {
      $(".logo").attr("data", "./imgs/logo-2.svg");
    }
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
    change_menu();

    var scroll = $(window).scrollTop();
    var width = $(window).width();

    if (width > 991) {
      if (scroll > 10) {
        if (scroll_status) {
          $("header").addClass("scroll");
          if ($(".nav-link").hasClass("contato")) {
            $(".logo").attr("data", "./imgs/logo.svg");
          }
        }
        scroll_status = false;
      } else {
        if (!scroll_status) {
          $("header").removeClass("scroll");
          if ($(".nav-link").hasClass("contato")) {
            $(".logo").attr("data", "./imgs/logo-2.svg");
          }
          scroll_status = true;
        }
      }
    }
  });
}

function change_menu() {
  var i = 95;

  var scroll = $(window).scrollTop();

  var inicial_top = $($("#inicial")).offset().top;
  var inicial_bottom = inicial_top + $("#inicial").height() - i;

  var hygge_top = $($("#hygge")).offset().top;
  var hygge_bottom = hygge_top + $("#hygge").height() - i;

  var como_funciona_top = $($("#como-funciona")).offset().top;
  var como_funciona_bottom =
    como_funciona_top + $("#como-funciona").height() - i;

  var antecipe_top = $($("#antecipe")).offset().top;
  var antecipe_bottom = antecipe_top + $("#antecipe").height() - i;

  var vantagens_top = $($("#vantagens")).offset().top;
  var vantagens_bottom = vantagens_top + $("#vantagens").height() - i;

  var o_que_dizem_nossos_parceiros_e_clientes_top = $(
    $("#o-que-dizem-nossos-parceiros-e-clientes")
  ).offset().top;
  var o_que_dizem_nossos_parceiros_e_clientes_bottom =
    o_que_dizem_nossos_parceiros_e_clientes_top +
    $("#o-que-dizem-nossos-parceiros-e-clientes").height() -
    i;

  var perguntas_frequentes_top = $($("#perguntas-frequentes")).offset().top;
  var perguntas_frequentes_bottom =
    perguntas_frequentes_top + $("#perguntas-frequentes").height() - i;

  var fale_conosco_top = $($("#fale-conosco")).offset().top;
  var fale_conosco_bottom = fale_conosco_top + $("#fale-conosco").height() - i;

  if (scroll >= inicial_top && scroll < inicial_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#inicial"]')
      .parent()
      .addClass("active");
  } else if (scroll >= hygge_top && scroll < hygge_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#hygge"]')
      .parent()
      .addClass("active");
  } else if (scroll >= como_funciona_top && scroll < como_funciona_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#como-funciona"]')
      .parent()
      .addClass("active");
  } else if (scroll >= antecipe_top && scroll < antecipe_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#antecipe"]')
      .parent()
      .addClass("active");
  } else if (scroll >= vantagens_top && scroll < vantagens_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#vantagens"]')
      .parent()
      .addClass("active");
  } else if (
    scroll >= o_que_dizem_nossos_parceiros_e_clientes_top &&
    scroll < o_que_dizem_nossos_parceiros_e_clientes_bottom
  ) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#o-que-dizem-nossos-parceiros-e-clientes"]')
      .parent()
      .addClass("active");
  } else if (
    scroll >= perguntas_frequentes_top &&
    scroll < perguntas_frequentes_bottom
  ) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#perguntas-frequentes"]')
      .parent()
      .addClass("active");
  } else if (scroll >= fale_conosco_top && scroll < fale_conosco_bottom) {
    $("a")
      .parent()
      .removeClass("active");
    $('a[href="#fale-conosco"]')
      .parent()
      .addClass("active");
  }
}
