$(document).ready(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
    scrollr = skrollr.init();
    $("html").niceScroll({ scrollspeed: 60 });
  }

  var windowInnerWidth = window.innerWidth;
  adjustNavbarPadding(windowInnerWidth);
});

window.onresize = function (event) {
  var windowInnerWidth = window.innerWidth;
  adjustNavbarPadding(windowInnerWidth);
};

function adjustNavbarPadding(windowInnerWidth) {
  var padding = 13;
  if (windowInnerWidth < 768)
    padding = 0;

  $('.navbar-collapse').css({
    'padding-top': padding + 'px'
  });
}

