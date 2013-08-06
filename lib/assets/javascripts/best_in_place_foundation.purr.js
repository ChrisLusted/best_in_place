//= require jquery.purr

jQuery(document).on('best_in_place:error', function(event, request, error) {
    // Display all error messages from server side validation
    jQuery.each(jQuery.parseJSON(request.responseText), function(index, value) {
      if( typeof(value) == "object") {value = index + " " + value.toString(); }
      var container = jQuery("<div data-alert='' class='alert-box alert radius'></div>").html(value);
      container.purr();
    });
});
