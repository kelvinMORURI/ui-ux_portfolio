$(document).ready(function() {
  $('.scrollArrow').on('click', function(e) {
      e.preventDefault();
      let target = $($(this).attr('href'));
      if (target.length) {
          $('html, body').animate({ 
              scrollTop: target.offset().top - 50 
          }, 300, 'linear');
      }
  });
});

// Initialize AOS (outside document ready)
AOS.init();
