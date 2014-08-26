

$(document).ready(function () {

  var language = getCookie("lang");
  if (language == '')
    language = 'en';

  i18n.init({ lng: language }, function () {
    // save to use translation function as resources are fetched
    updateTranslation();
  });
});

$('.english-switch').click(function () {
  var language = 'en';
  document.cookie = "lang=en";
  i18n.setLng('en', function (t) {
    updateTranslation();
  });
});

$('.spanish-switch').click(function () {
  var language = 'es';
  document.cookie = "lang=es";
  i18n.setLng('es', function (t) {
    updateTranslation();
  });
});

function updateTranslation() {
  $('.nav').i18n();
  $('.headline-container').i18n();
  $('.carousel-header').i18n();
  $('.navbar-custom').i18n();
  $('.dynamic-section').i18n();
  $('.holistic-section').i18n();
  $('.pragmatic-section').i18n();
  $('.insightful-section').i18n();
  $('.stochastic-section').i18n();
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