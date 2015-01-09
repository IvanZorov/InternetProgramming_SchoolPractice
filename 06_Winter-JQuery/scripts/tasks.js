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

//task_07
	$("#dynamiccontent").append('<button id="addbutton"> Dont press it! </button>');
	
//task_08
	$("#dynamiccontent").append('<ul id="posts"></ul>');
	
//task_09
	$("ul#menu-top-level-menu a:last").click(function() {
		alert("hello world");
	});	

//task_10
	$("ul#menu-top-level-menu a:last").click(function() {
		var z = $(".inscreen :first").replaceWith($(".inscreen div:nth-child(2)"));
		$(".inscreen :first").after(z);
	});

//task_11
	var web =  "http://jsonplaceholder.typicode.com/posts" ;
	$.get(web,function(result){
		for (var i=0;i<5;i++) {
			$("#posts").append('<li> '+$(result[i]).attr("title")+' </li>');
		}
	});
	
});
