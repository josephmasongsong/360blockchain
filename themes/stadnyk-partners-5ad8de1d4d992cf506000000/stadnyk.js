// This is where it all goes :)

$(document).ready(function () {

    setTimeout(function() {
        $('.alert').slideUp();
    }, 4000);

    $(document).on("scroll", onScroll);
  
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent('li').removeClass('active');
        })
        $(this).parent('li').addClass('active');
      
        var target = this.hash,

        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $( $(this).attr('href') ).offset().top - 115
        }, 500, 'swing', function () {

            $(document).on("scroll", onScroll);
        });
    });

    if(window.location.hash) {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 115
        }, 500);
    }

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
    var scrollPos = ($(document).scrollTop() + 115)
    $('.navbar-default a.scrolltarget').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-default li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");

        }
    });
}


