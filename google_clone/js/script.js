var showBoarder = false;

$(document).ready(function() {
// Show blue outline around search bar
  $('.search input').on('click', function(){
      showBoarder = false;
      $('.search').addClass('search-border');
      console.log(showBoarder);
  })

// Remove search bar outline when body is clicked
  $("body").mouseup(function(){
    $('.search').removeClass('search-border');
  });

});
