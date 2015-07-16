(function($) {
  $.fn.helloWorld = function() {
    // 'this' is already a jQuery object
    this.each( function() {
      $(this).text("Hello, World!");
    });
  }
}(jQuery));