var fixed = false;

var affixedNavbarTop = $("#affixed-navbar").offset().top;
var affixedNavbarBottom = $("#affixed-navbar").next().offset().top;
var affixedNavbarHeight = affixedNavbarBottom - affixedNavbarTop;

var innerAffixedNavbarTop = $("#inner-affixed-navbar").offset().top;
var innerAffixedNavbarHeight = affixedNavbarBottom - innerAffixedNavbarTop;

var navbarCustomHeaderHeight = innerAffixedNavbarTop - affixedNavbarTop;

$(document).ready(function() {
  adjustNavbarPadding();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
    var s = skrollr.init();
    $("html").niceScroll({scrollspeed:60});
  }
  
});

window.onresize = function(event) {
  adjustNavbarPadding();
};

function adjustNavbarPadding() {
  var windowInnerWidth = window.innerWidth;
  var padding = 30;
  if (windowInnerWidth < 768)
    padding = 0;

  $('.navbar-collapse').css({
    'padding-top': padding + 'px'
  });
}

function updateCustomNavbarIconsBackground() {

  if (window.pageYOffset >= $('.dynamic-section').offset().top - innerAffixedNavbarHeight - 1
      && window.pageYOffset < $('.dynamic-section').next().offset().top - innerAffixedNavbarHeight - 1)
    $('.dynamic-section-icon').addClass("is-active");
  else
    $('.dynamic-section-icon').removeClass("is-active");

  if (window.pageYOffset >= $('.holistic-section').offset().top - innerAffixedNavbarHeight - 1
      && window.pageYOffset < $('.holistic-section').next().offset().top - innerAffixedNavbarHeight - 1)
    $('.holistic-section-icon').addClass("is-active");
  else
    $('.holistic-section-icon').removeClass("is-active");

  if (window.pageYOffset >= $('.pragmatic-section').offset().top - innerAffixedNavbarHeight - 1
      && window.pageYOffset < $('.pragmatic-section').next().offset().top - innerAffixedNavbarHeight - 1)
    $('.pragmatic-section-icon').addClass("is-active");
  else
    $('.pragmatic-section-icon').removeClass("is-active");

  if (window.pageYOffset >= $('.insightful-section').offset().top - innerAffixedNavbarHeight - 1
      && window.pageYOffset < $('.insightful-section').next().offset().top - innerAffixedNavbarHeight - 1)
    $('.insightful-section-icon').addClass("is-active");
  else
    $('.insightful-section-icon').removeClass("is-active");

  if (window.pageYOffset >= $('.stochastic-section').offset().top - innerAffixedNavbarHeight - 1
      && window.pageYOffset < $('.stochastic-section').offset().top + $('.stochastic-section').height() - innerAffixedNavbarHeight - 1)
    $('.stochastic-section-icon').addClass("is-active");
  else
    $('.stochastic-section-icon').removeClass("is-active");
}


function updateCustomNavbarPositionStatus() {
  if (window.pageYOffset >= innerAffixedNavbarTop && !fixed) {
    var $div = $("<div>");
    $div.height(affixedNavbarHeight);
    $("#affixed-navbar").before($div);

    $("#affixed-navbar").addClass("is-stuck");
    $("#affixed-navbar").css("top", -navbarCustomHeaderHeight + "px");
    fixed = true;
  }

  if (window.pageYOffset < innerAffixedNavbarTop && fixed) {

    $("#affixed-navbar").prev().remove();

    $("#affixed-navbar").removeClass("is-stuck");
    $("#affixed-navbar").css("top", 0 + "px");
    fixed = false;
  }
}

window.onscroll = function (event) {
  updateCustomNavbarIconsBackground();
  updateCustomNavbarPositionStatus();
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - innerAffixedNavbarHeight
        }, 300, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('a.page-scroll-main').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 300, 'easeInOutExpo');
        event.preventDefault();
    });
});