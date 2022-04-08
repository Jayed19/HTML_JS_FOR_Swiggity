$(document).ready(function() {
  $('.Foreigngroup').hide();
  $('#ForeignNo').show();
  $('#Foreignsourcedropdown').change(function() {
    $('.Foreigngroup').hide();
    $('#' +'Foreign'+ $(this).val()).show();
  })
});
