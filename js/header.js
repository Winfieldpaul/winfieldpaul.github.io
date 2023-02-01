$(function () {
  $(window).on('scroll', function () {
    if ($('.onepx').height()  < $(this).scrollTop()) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
  });
});