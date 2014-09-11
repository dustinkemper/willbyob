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
			username: 'willbyob',
			clientID: '134e71304889432cb30d25c66c05a5b3',
			urls: true,
			limit: 16,
			error: function(errorCode, errorMessage) {
			
				console.log('There was an error');
			
				if(errorCode && errorMessage) {
			
					alert(errorCode +': '+ errorMessage);
				
				}
				
			},
			success: function() {
				console.log('The request was successful!');
			}
		});
		
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);