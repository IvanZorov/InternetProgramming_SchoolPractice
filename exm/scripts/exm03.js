$(document).ready(function() {
	"use strict"

	var web = "http://validate.jsontest.com/?json=";

	$("#666").click(function(){
		var z =	$("#1337").val();
		$.post(web+z,{
			"json": z
		},function(result){
			 if (result.hasOwnProperty("error")) {
			 	$("#3").text($(result).attr("error"));
			 } else {
			 	if ($(result).attr("object_or_array") == "object") {
			 		$("#3").text("This is " + $(result).attr("object_or_array"));
			 	} else {
			 		$("#3").text("This is " + $(result).attr("object_or_array"));
			 	}
			 }
		});
	});

});
