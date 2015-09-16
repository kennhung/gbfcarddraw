// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
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
	 			], 	{duration: 6200, fade: 1300, centeredX: false, centeredY: false});
		});
})

$("#cardBG").backstretch("images/gacha_result_bg.png");
