// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		$('.menu-link').bigSlide({
			menu: ('#mobile'),
			menuWidth: '19em'
		});

		$('.dropdown').hover(function(){
			$(this).find('#menu-dropdown').slideToggle();
		});


		$('.instagram').instagramLite({
	    clientID: '1065746.134e713.5f2003dccf7f41b29d786e8af87623e1',
	    username: 'willbyob'

		});
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);