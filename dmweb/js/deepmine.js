var fixed = false;
var url = "https://www.youtube.com/embed/pem5izo8jjQ?controls=0&rel=0&modestbranding=1&autoplay=1";

var affixedNavbarTop = $("#affixed-navbar").offset().top;
var affixedNavbarBottom = $("#affixed-navbar").next().offset().top;
var affixedNavbarHeight = affixedNavbarBottom - affixedNavbarTop;

var innerAffixedNavbarTop = $("#inner-affixed-navbar").offset().top;
var innerAffixedNavbarHeight = affixedNavbarBottom - innerAffixedNavbarTop;

var navbarCustomHeaderHeight = innerAffixedNavbarTop - affixedNavbarTop;

var scrollr;

$(document).ready(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
    scrollr = skrollr.init();
    $("html").niceScroll({ scrollspeed: 60 });
  }

  var windowInnerWidth = window.innerWidth;
  adjustMainNavbarPadding(windowInnerWidth);
  adjustCustomNavbarSize(windowInnerWidth);
  adjustHolisticBlocksPosition(windowInnerWidth);

});

window.onresize = function (event) {
  var windowInnerWidth = window.innerWidth;
  adjustMainNavbarPadding(windowInnerWidth);
  adjustCustomNavbarSize(windowInnerWidth);
  adjustHolisticBlocksPosition(windowInnerWidth);
};

function adjustMainNavbarPadding(windowInnerWidth) {
  var padding = 13;
  if (windowInnerWidth < 768)
    padding = 0;

  $('.navbar-collapse').css({
    'padding-top': padding + 'px'
  });
}

function adjustCustomNavbarSize(windowInnerWidth) {
  var originalHeaderFontSize = 36;
  var originalFontSize = 14;
  var originalPadding = 20;
  var originalImageSize = 48;

  var delta = 1;
  if (windowInnerWidth < 650) {
    delta -= (650 - windowInnerWidth) / 650;   
  }

  $('.navbar-custom-header').css("font-size", originalHeaderFontSize * delta + "px");
  $('.navbar-custom-section').css("font-size", originalFontSize * delta + "px");

  $('.navbar-custom-section').css("padding-left", originalPadding * delta + "px");
  $('.navbar-custom-section').css("padding-right", originalPadding * delta + "px");

  $('.navbar-custom-logo').css("width", originalImageSize * delta + "px");
  $('.navbar-custom-logo').css("height", originalImageSize * delta + "px");
}

function adjustHolisticBlocksPosition(windowInnerWidth) {
  var dW, dH;

  var minePlanLeft = $('.mine-plan').offset().left;
  var minePlanTop = $('.mine-plan').offset().top;
  var minePlanWidth = $('.mine-plan').outerWidth(true);
  var minePlanHeight = $('.mine-plan').outerHeight(true);

  var geoModelLeft = $('.geo-model').parent().offset().left;
  var geoModelTop = $('.geo-model').parent().offset().top;

  dW = minePlanLeft - geoModelLeft - 200;
  dH = minePlanTop - geoModelTop - 160;
  $('.geo-model').attr("data-350-top", "border-color: rgba(40, 40, 40, 1); top: " + dH + "px; left: " + dW + "px; border-width: 1px");

  var miningEnvironmentLeft = $('.mining-environment').parent().offset().left;
  var miningEnvironmentTop = $('.mining-environment').parent().offset().top;
  var miningEnvironmentWidth = $('.mining-environment').outerWidth(true);

  dW = (miningEnvironmentLeft + miningEnvironmentWidth) - (minePlanLeft + minePlanWidth) - 170;
  dH = minePlanTop - miningEnvironmentTop - 160;
  $('.mining-environment').attr("data-350-top", "border-color: rgba(40, 40, 40, 1); top: " + dH + "px; right: " + dW + "px; border-width: 1px");

  var pitCollectionLeft = $('.pit-collection').parent().offset().left;
  var pitCollectionTop = $('.pit-collection').parent().offset().top;
  var pitCollectionHeight = $('.pit-collection').outerHeight(true);

  dW = minePlanLeft - pitCollectionLeft - 200;
  dH = (pitCollectionTop + pitCollectionHeight) - (minePlanTop + minePlanHeight) - 240;
  $('.pit-collection').attr("data-550-top", "border-color: rgba(40, 40, 40, 1); top: " + dH + "px; left: " + dW + "px; border-width: 1px");

  var economicEnvironmentLeft = $('.economic-environment').parent().offset().left;
  var economicEnvironmentTop = $('.economic-environment').parent().offset().top;
  var economicEnvironmentWidth = $('.economic-environment').outerWidth(true);
  var economicEnvironmentHeight = $('.economic-environment').outerHeight(true);

  dW = (economicEnvironmentLeft + economicEnvironmentWidth) - (minePlanLeft + minePlanWidth) - 170;
  dH = (economicEnvironmentTop + economicEnvironmentHeight) - (minePlanTop + minePlanHeight) - 240;
  $('.economic-environment').attr("data-550-top", "border-color: rgba(40, 40, 40, 1); top: " + dH + "px; right: " + dW + "px; border-width: 1px");

  scrollr.refresh();
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

$('#video-modal').on('hidden.bs.modal', function () {
  $('#yt-id').attr('src', '');
});


$('#video-modal').on('show.bs.modal', function () {
  var documentWidth = $(window).width();
  var documentHeight = $(window).height();

  var documentAspectRatio = documentWidth / documentHeight;
  var youtubeAspectRatio = 16 / 9;

  console.log(documentAspectRatio);
  console.log(youtubeAspectRatio);

  var videoWidth, videoHeight;
  if (documentAspectRatio < youtubeAspectRatio) {
    videoWidth = documentWidth * 0.8;
    videoHeight = videoWidth / youtubeAspectRatio;
  } else {
    videoHeight = documentHeight * 0.8;
    videoWidth = videoHeight * youtubeAspectRatio;
  }

  $('#yt-id').width(videoWidth);
  $('#yt-id').height(videoHeight);

  $('.modal-content').width(videoWidth);
  $('.modal-content').height(videoHeight);
  $('.modal-content').css("margin-top", documentHeight * 0.1);

});

$("#play-it").click(function () {
  $('#yt-id').attr('src', url);
});

$("#play-it").mouseover(function () {
  $(this).attr("src", "images/VideoThumbOverlay.png");
});

$("#play-it").mouseout(function () {
  $(this).attr("src", "images/VideoThumb.png");
});
