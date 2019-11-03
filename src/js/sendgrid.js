import "jquery-mask-plugin";

export function sendgrid() {
  $(".date").mask("00/00/0000");
  $(".time").mask("00:00:00");
  $(".date_time").mask("00/00/0000 00:00:00");
  $(".cep").mask("00000-000");
  $(".phone_with_ddd").mask("(00) 0000-0000");
  $(".phone_us").mask("(000) 000-0000");
  $(".cpf").mask("000.000.000-00", { reverse: true });
  $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
  $(".money").mask("000.000.000.000.000", { reverse: true });
  $(".numero").mask("#.##0", { reverse: true });
  $(".money2").mask("#.##0,00", { reverse: true });

  $(".placa").mask("SSS 9999");
  $(document).on("input", ".placa", function() {
    this.value = this.value.toUpperCase();
  });

  $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
    translation: {
      Z: {
        pattern: /[0-9]/,
        optional: true
      }
    }
  });
  $(".percent").mask("##0,00%", { reverse: true });

  // Telefone
  var SPMaskBehavior = function(val) {
      return val.replace(/\D/g, "").length <= 10
        ? "(00) 0000-00000"
        : "(00) 0 0000-0000";
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
    };
  $(".phonemask").mask(SPMaskBehavior, spOptions);

  $("#contato #cpnj").on("input", function() {
    var dInput = this.value;
    var length = this.value.length;

    $(this)
      .parent()
      .removeClass("error");

    if (length === 18) {
      if (validarCNPJ(dInput)) {
      } else {
        $(this)
          .parent()
          .addClass("error");
      }
    }
  });

  $("#contato").submit(function(e) {
    e.preventDefault();
    if (validarCNPJ($("#contato #cpnj").val())) {
      get_form();
    }
  });
}

function get_form() {
  var nome = $("#contato #nome").val();
  var email = $("#contato #email").val();
  var telefone = $("#contato #telefone").val();
  var cpnj = $("#contato #cpnj").val();
  var faturamento = $("#contato #faturamento").val();

  $.ajax({
    type: "POST",
    url: "./back-end/mail.php",
    data: {
      nome: nome,
      email: email,
      telefone: telefone,
      cpnj: cpnj,
      faturamento: faturamento
    },
    dataType: "json",
    beforeSend: function() {
      $(".btn-fale").fadeOut();
      $(".loading").fadeIn();
    },
    complete: function(response) {
      $(".loading").hide();
    },
    success: function(response) {
      $(".mensagem").html("<p>" + response.mensagem + "</p>");
    },
    error: function() {}
  });
}

function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  var tamanho = cnpj.length - 2;
  var numeros = cnpj.substring(0, tamanho);
  var digitos = cnpj.substring(tamanho);
  var soma = 0;
  var pos = tamanho - 7;
  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}
