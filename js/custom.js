// templatemo 467 easy profile

$(window).one('backstretch.after', function (e, instance, index) {
  $('.preloader').fadeOut('slow');
});

// HOME BACKGROUND SLIDESHOW
$(function(){   
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/wallpaper.png", 
			 "images/karen.jpg",
			 "images/farahkatarina.jpg",
			 "images/miraoru.jpg",
			 "images/vira.jpg",
			 "images/serephina.jpg",
			 "images/soshia2.jpg"
	 			], 	{duration: 10200, fade: 1300, centeredX: false, centeredY: false});
		});
})

$("#cardBG").backstretch("images/gacha_result_bg.png");
