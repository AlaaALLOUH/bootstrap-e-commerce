// In the JS, we can use that filter when a button is clicked.

// init Isotope
var $grid = $('.x-grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});