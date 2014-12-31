$(document).ready(function() {
	"use strict"

//task_02
	console.log($("#footer a:first").attr("title"));	

//task_03
	console.log($("#col1 p").text());

//task_04	
	$("ul#menu-top-level-menu").append("<li> <a> new button </a> </li>");

//task_05
	$("#footer").prepend('<div id="dynamiccontent"></div>');

//task_06
	$("#dynamiccontent").append('<input id="textinput"></input>');	
	
});
