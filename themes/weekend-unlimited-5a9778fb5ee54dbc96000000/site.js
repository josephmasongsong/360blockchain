

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
            'scrollTop':  $( $(this).attr('href') ).offset().top - 84
        }, 500, 'swing', function () {

            $(document).on("scroll", onScroll);
        });
    });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.weekend-navbar').addClass('shrink');
  } else {
    $('.weekend-navbar').removeClass('shrink');
  }
});   

$(document).ready(function() {
    if(window.location.hash) {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 84
        }, 500);
    }
});

function onScroll(event){
    var scrollPos = ($(document).scrollTop() + 84)
    $('.weekend-navbar a.scrolltarget').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.weekend-navbar li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");
        }
    });
}


