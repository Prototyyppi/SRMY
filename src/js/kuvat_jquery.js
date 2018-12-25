$(document).ready(function() {
	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 50) {
			$(".header").fadeTo(5, 0.7);
		//	$(".hattu").animate({height: "110%"});
		}
		else {
		//	$(".hattu").css("z-index", 200);
			$(".header").fadeTo(5, 1);
		}
	});
	
	$(".header").on("mouseover", function() {
		$(".header").css("opacity", "1");

		if($(document).scrollTop() > 50) {
			$(".header").on("mouseleave", function() {
			$(".header").css("opacity", "0.7");
		});
		} else if($("html").offset().top <= 50) {
			$(".header").on("mouseleave", function() {
				$(".header").css("opacity", "1");
			});
		}
	});

});
