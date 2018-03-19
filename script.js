// Accordian

$(document).ready(function () {
  $('li.q').on('click', function() {
    $(this).next()
      .slideToggle('500')
        .siblings('li.a')
          .slideUp();
    const currentArrow = $(this).children('img');
    $('img').not(currentArrow).removeClass('rotate');
    currentArrow.toggleClass('rotate');

  });
});