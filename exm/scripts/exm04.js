$(document).ready(function() {
	"use strict"

	var web = "http://api.openweathermap.org/data/2.5/weather?q=";

	$("#666").click(function(){
		var z = $("#1337").val();

		$.get(web+z,function(result){
			var ress = JSON.stringify(result) ;
			if (ress .indexOf("Error: Not found city") > -1) {
			 	$("#3").text("City not found");
			 } else {
				$("#3").text("Weather data: ");

				var sys = $(result).attr("sys");
				var sunrise = $(sys).attr("sunrise");
				var sunset = $(sys).attr("sunset");

				var risetime = timeConverter(sunrise);
				var settime = timeConverter(sunset);

				var main = $(result).attr("main");
				var mintemp = $(main).attr("temp_min")
				var maxtemp = $(main).attr("temp_max")

				var wind = $(result).attr("wind");
				var wspd = $(wind).attr("speed");

				$("#3").append('<div> Sunrise: '+risetime+' </div>');		
				$("#3").append('<div> Sunset: '+settime+' </div>');			
				$("#3").append('<div> min temp: '+mintemp+' </div>');
				$("#3").append('<div> max temp: '+maxtemp+' </div>');
				$("#3").append('<div> wind speed: '+wspd+' </div>');
			 }

		});
	});

	function timeConverter(UNIX_timestamp){
		var a = new Date(UNIX_timestamp*1000);
		var hour = a.getHours();
		var min = a.getMinutes();
		var time = hour + ':' + min;
		return time;
	}

});
