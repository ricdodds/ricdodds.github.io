$(document).ready(function () {
  language = 'es';

  i18n.init({lng: language}, function () {
    // save to use translation function as resources are fetched
    $('.nav').i18n();
  });
});

$('.english-switch').click(function () {
  i18n.setLng('en', function (t) {
    $('.nav').i18n();
  });
});

$('.spanish-switch').click(function () {
  i18n.setLng('es', function (t) {
    $('.nav').i18n();
  });
});