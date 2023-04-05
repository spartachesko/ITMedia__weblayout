document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices1")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });

});
document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices2")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });

});