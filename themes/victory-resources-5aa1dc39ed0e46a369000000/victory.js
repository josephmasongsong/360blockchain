$(window).scroll(function() {
  if ($(document).scrollTop() >= 50) {
    $('#victory-resources-navigation').removeClass('transparent');
    $('.victory-logo img').attr('src', 'https://d3n8a8pro7vhmx.cloudfront.net/themes/5aa1dc39ed0e46a369000000/attachments/original/1521646130/victoryresources-01.png?1521646130');
  } else if ($(document).scrollTop() <= 50) {
    $('#victory-resources-navigation').addClass('transparent');
    $('.victory-logo img').attr('src', 'https://d3n8a8pro7vhmx.cloudfront.net/themes/5aa1dc39ed0e46a369000000/attachments/original/1521646130/victoryresources_white-01.png?1521646130');
  }
});

$(document).ready(function () {

  setTimeout(function() {
    $('.alert').slideUp();
  }, 4000);
    
  $(document).on("scroll", onScroll);

  $("a[href^='#']").on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).parent('li').removeClass('active');
    })
    $(this).parent('li').addClass('active');
  
    var target = this.hash,

    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $( $(this).attr('href') ).offset().top - 80
    }, 500, 'swing', function () {

        $(document).on("scroll", onScroll);
    });
  });
});

$(document).ready(function() {
    if(window.location.hash) {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 84
        }, 500);
    }
    $('button').click(function(){
      $('.hamburger').toggleClass('is-active');
    });
    
});

$(function(){ 
     var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
         $('.hamburger').toggleClass('is-active');
     });
});

function onScroll(event){
    var scrollPos = ($(document).scrollTop() + 84)
    $('#victory-resources-navbar-links a.scrolltarget').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#victory-resources-navbar-links li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");
        }
    });
}
 