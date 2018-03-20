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

  $('.button').on('click', function(){
    $('#'+$(this).data('modal')).css('display','block');
  })
  
  $('.close').on('click', function(){
    $('.modal').hide();
  })
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target.className == 'modal') {
      $('.modal').hide();
    }
  }