var affixedNavbarPosition = $("#affixed-navbar").offset().top;
var fixed = false;

$(document).ready(function() {
  adjustNavbarPadding();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
    var s = skrollr.init();
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

window.onscroll = function (event) {
  if(window.pageYOffset >= affixedNavbarPosition && !fixed) {
    
    var $div = $("<div>");
    $div.height($("#affixed-navbar").height());

    $("#affixed-navbar").before($div);
    $("#affixed-navbar").addClass("is-stuck");
    fixed = true;
  }
  
  if(window.pageYOffset < affixedNavbarPosition && fixed) {
    $("#affixed-navbar").prev().remove();
    $("#affixed-navbar").removeClass("is-stuck");
    fixed = false;
  }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $("#affixed-navbar").height()
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