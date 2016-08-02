var windowWidth = $(window).width();

$(document).ready(function() {

    // Show th Tooltip
    $('.th').on('click', function() {
        $('.thToolTip').show();
    })

    // Show bell Tooltip on desktop / app link on mobile
    if (windowWidth <= 480) {
        $('.bell-link').attr('href', 'https://notifications.google.com/widget/mobile');
    } else {
      $('.bell').on('click', function() {
          $('.bellToolTip').show();
      })
    }

    // Show blue outline around search bar
    $('.search input').on('click', function() {
        $('.search').addClass('search-border');
    })

    // Remove search bar outline & tooltips when body is clicked
    $("body").mouseup(function() {
        $('.search').removeClass('search-border');
        $('.thToolTip').hide();
        $('.bellToolTip').hide();
    });

});
