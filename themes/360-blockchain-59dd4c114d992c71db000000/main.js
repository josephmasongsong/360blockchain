$(document).ready(function($) {
  	new WOW().init();
});

$(function(){ 
     var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });

    $(".modal").on("show", function () {
      $("body").addClass("modal-open");
    }).on("hidden", function () {
      $("body").removeClass("modal-open")
    });
});

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
            'scrollTop':  $( $(this).attr('href') ).offset().top - 80
        }, 500, 'swing', function () {

            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = ($(document).scrollTop() + 80)
    $('.navbar-custom a.scrolltarget').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-custom li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");

        }
    });
}