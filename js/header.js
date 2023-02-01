$(function () {
  $(window).on('scroll', function () {
    if ($('.header').height()  < $(this).scrollTop()) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
  });
});