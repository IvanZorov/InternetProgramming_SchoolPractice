$(document).ready(function() {
	"use strict"

	var web = "http://md5.jsontest.com/?text=" ;

	$("#1").click(function(){
		var z = $("#textinput").val();
		if ( z == null || z == "" ) {
			alert("ERROR: Enter text");
			return false;
		} else {
			$.post(web + z,{
				"text": z
			},function(result){
				$("div").text('The MD5 of '+$(result).attr("original")+' is '+$(result).attr("md5")+' ');
			});
		}
	});
});
