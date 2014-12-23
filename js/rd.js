$('.lia').mouseover(function () {
    //$('#element').css({ backgroundColor: "#99cc00" }); //works but no animation
    //$('#element').animate({ backgroundColor: '#ffffff' }, 2000); //does nothing
    //$('body').animate({backgroundColor:'#99cc00'}, 2500); //does nothing
    //alert("click");
    $('#navigation').css('background', 'blue');
    $('body').animate({backgroundColor:'#99cc00'}, 2500); //does nothing
});