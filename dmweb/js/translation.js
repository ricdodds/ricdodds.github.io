$(document).ready(function () {
  var language = getCookie("lang");
  if (language == '')
    language = 'en';

  $('.english-switch-text').css("color", "#d3d3d3");

  $('.spanish-switch-text').mouseenter(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.spanish-switch-text').mouseleave(function () {
    $(this).css("color", "#777");
  });

  i18n.init({ lng: language }, function () {
    // save to use translation function as resources are fetched
    updateTranslationDisplay();
  });
});

$('.english-switch').click(function () {
  var language = 'en';
  document.cookie = "lang=en";
  i18n.setLng('en', function (t) {
    updateTranslationDisplay();
  });

  $('.english-switch-text').css("color", "#d3d3d3");
  $('.spanish-switch-text').css("color", "#777");

  $('.english-switch-text').mouseenter(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.english-switch-text').mouseleave(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.spanish-switch-text').mouseenter(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.spanish-switch-text').mouseleave(function () {
    $(this).css("color", "#777");
  });

});

$('.spanish-switch').click(function () {
  var language = 'es';
  document.cookie = "lang=es";
  i18n.setLng('es', function (t) {
    updateTranslationDisplay();
  });

  $('.spanish-switch-text').css("color", "#d3d3d3");
  $('.english-switch-text').css("color", "#777");

  $('.spanish-switch-text').mouseenter(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.spanish-switch-text').mouseleave(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.english-switch-text').mouseenter(function () {
    $(this).css("color", "#d3d3d3");
  });
  $('.english-switch-text').mouseleave(function () {
    $(this).css("color", "#777");
  });

});

function updateTranslationDisplay() {
  $('.nav').i18n();
  $('.headline-container').i18n();
  $('.carousel-header').i18n();
  $('.navbar-custom').i18n();
  $('.dynamic-section').i18n();
  $('.holistic-section').i18n();
  $('.pragmatic-section').i18n();
  $('.insightful-section').i18n();
  $('.stochastic-section').i18n();
  $('#contact').i18n();
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";

}