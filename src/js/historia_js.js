var is_open = 0;
var curr_year = "y2018";

function openNav() {
	if (is_open == 1)
		closeNav(curr_year);
	else {
		document.getElementById("navigation").style.height = "430px";
		document.getElementById("navigation").style.width = "40%";
		is_open = 1;
		//setTimeout(function() {
		document.getElementById("placeholder").style.height = "70vh";
		//}, 500);
	}
}

function closeNav(year_segment) {
	is_open = 0;
	var yearArray = ["welcome_text", "y2018", "y2017", "y2016", "y2015", "y2014", "y2013", "y2012", "y2011"];
	var len = yearArray.length;
	for (var i = 0; i < len; i++) {
		document.getElementById(yearArray[i]).style.height = "0";
	}

	document.getElementById("navigation").style.height = "45px";
	document.getElementById("navigation").style.width = "40%";

	if (year_segment) {
		document.getElementById(year_segment).style.height = "100%";
		document.getElementById(year_segment).style.overflow = "auto";
		document.getElementById("selector").innerHTML = "&#9776; " + year_segment.replace('y', '');
		curr_year = year_segment;
	}
	try {
		document.getElementById("placeholder").style.height = (document.documentElement.clientHeight - 200) + "px";
	} catch {
		document.getElementById("placeholder").style.height = "400px";
	}
}
