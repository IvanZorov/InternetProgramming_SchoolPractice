$(document).ready(function() {
	"use strict"

	$("#1337").click(function(){
		var in1 = $("#3").val();
		var in2 = $("#666").val();
		//var web0 = "http://echo.jsontest.com/" + in1 + "/" + in2;

		var web = "http://echo.jsontest.com/";
		var res = encodeURIComponent(in1);
		var res2 = encodeURIComponent(in2);
		var web3 = web + res + "/" + res2;

		if ( in1 == "" || in2 == "") {
			alert("ERROR: Please enter key and value");
		} else {
			$.get(web3, function(result){
				$("div").text("JSON:" + JSON.stringify(result) );
			});
		}
	});

});
