$(function () {
  $("#slider-range-max").slider({
    range: "max",
    min: 1,
    max: 24,
    value: 16,
    slide: function (event, ui) {
      $("#amount").val(ui.value);
    }
  });
  $("#amount").val($("#slider-range-max").slider("value"));
});

$(function () {
  $("#slider-range-max2").slider({
    range: "max",
    min: 1,
    max: 22,
    value: 16,
    slide: function (event, ui) {
      $("#amount2").val(ui.value);
    }
  });
  $("#amount2").val($("#slider-range-max2").slider("value"));
});

