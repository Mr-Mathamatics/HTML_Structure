// back to top button js

var btn = $('#back-to-top');

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

// preloder js 

$(window).on('load', function() {
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).removeClass('no-scroll');
})


// custum slider js start
