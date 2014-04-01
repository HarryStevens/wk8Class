/**
 * @author Harry Stevens
 */

//An array of all of our images (in order)
var images = ["drain_0m.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_1km.png", "drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_ed.png", "drain_nl.png"];

//Index of the current image in our images array
var index = 0;

function setNav() {
	$(".button").on("click", function() {
		
		console.log("click");
		
		var isNext = $(this).hasClass("next");
		
		if (isNext == true && index != (images.length-1)) {
			index = index + 1;
		} else if (isNext == false && index != 0) {
			index = index - 1;
		} 
		
		$(".button").removeClass("disabled");
		
		if (index == 0) {
			$(".button.prev").addClass("disabled");
		} else if  (index == (images.length-1)) {
			$(".button.next").addClass("disabled");
		}
		
		updateImage();
		
	});
}

function updateImage (){
	$(".image-holder").html("<img src='images/" + images[index] + "' />");
}

//Load the first image into our image holder
$(document).ready(function() {
	$(".image-holder").html("<img src='images/" + images[index] + "' />");
	
	$(".button.prev").addClass("disabled");
	
	setNav();
});