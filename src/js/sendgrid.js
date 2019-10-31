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

  $("#contato").submit(function(e) {
    e.preventDefault();
    get_form();
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
