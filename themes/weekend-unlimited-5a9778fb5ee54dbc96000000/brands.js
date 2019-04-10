$(document).ready(function () {

  $("a[href^='#']").on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      var target = this.hash,

      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop':  $( $(this).attr('href') ).offset().top - 0
      }, 500, 'swing', function () {


      });
  });

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
