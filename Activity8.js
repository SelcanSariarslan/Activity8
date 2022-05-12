$(document).ready(function() {
	    var cities = [
		"Charlotte",
		"New York",
		"Washington DC"
		];

	$("#birthday").datepicker();	

	$("#city").autocomplete({
	source: cities
	});


})

