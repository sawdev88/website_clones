var showBoarder = false,
    windowWidth = $(window).width();

$(document).ready(function() {

// Show th Tooltip
  $('.th').on('click', function() {
    $('.thToolTip').show();
  })

// Show bell Tooltip
  if (windowWidth <= 480) {
    $('.bell-link').attr('href', 'https://notifications.google.com/widget/mobile');
  } else {
    $('.bell').on('click', function() {
      $('.bellToolTip').show();
    })
  }

// Show blue outline around search bar
  $('.search input').on('click', function(){
      showBoarder = false;
      $('.search').addClass('search-border');
      console.log(showBoarder);
  })

// Remove search bar outline when body is clicked
  $("body").mouseup(function(){
    $('.search').removeClass('search-border');
    $('.thToolTip').hide();
    $('.bellToolTip').hide();
  });

});
