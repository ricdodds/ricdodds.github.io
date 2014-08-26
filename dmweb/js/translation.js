$(document).ready(function () {
  language = 'en';

  i18n.init({ lng: language, debug: true }, function () {
    // save to use translation function as resources are fetched
    $('.nav').i18n();
    //$("headline").i18n();
  });
});