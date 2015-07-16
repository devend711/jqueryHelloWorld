(function($) {
  $.fn.helloWorld = function(opts) {

    var settings = $.extend({
      text: 'Hello, world',
      color: null,
      callback: null
    }, opts); // merge any opts that were passed

    // 'this' is already a jQuery object
    return this.each( function() {
      $(this).text(settings.text);

      if (settings.color) {
        $(this).css('color', settings.color);
      }

      if ($.isFunction(settings.callback)){
        settings.callback.call(this); // call the callback function on this jQuery object
      }
    });
  }
}(jQuery));