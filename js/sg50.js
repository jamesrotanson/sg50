$(document).ready(function(){

	for (i = 0; i < 144; i++) {

		var bubbleArray = [ 
		// G
		20, 21, 22, 38, 56, 58, 74, 75, 76, 94,
		// o
		41, 42, 43, 59, 61, 77, 78, 79,
		// o
		44, 45, 46, 62, 64, 80, 81, 82,
		// g
		47, 48, 49, 65, 67, 83, 84, 85, 103, 119, 120, 121,
		// l
		32, 50, 68, 86, 
		// e
		51, 52, 53, 69, 70, 87, 88, 89];

		var bubbleArray2 = $.map( bubbleArray, function(n){
			return n + 1;
		});

		function changeBubble(){
			$('.bubble:nth-child('+ bubbleArray2[j] +')')
			.removeClass('bubble--inactive')
			.addClass('bubble--active')
			.css('background-image','url(../sg50/img/icon_'+j+'.png)')
			.css("background-size","cover")
			.attr('id','bubble-data-'+j);
	    }

		for (var j = 0, l = bubbleArray.length; j < l; j++ ) {
			changeBubble();
		}

	    $('.container--main').append("<div class='bubble bubble--inactive'></div>");


	}
	$('.bubble--active').click(function(){
	    	window.open("https://www.singapore50.sg/", "_blank");
	    });
});
