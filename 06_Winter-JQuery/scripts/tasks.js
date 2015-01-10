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
	
//task_12
/*
	$("#addbutton").click(function(){
		var tin = $("#textinput").val();
		if (tin == null || tin == ""){
			alert("you must enter text");
		}
	});
*/

//task_13
/*
	$("#addbutton").click(function(){
		var tin = $("#textinput").val();
		if (tin == null || tin == ""){
			alert("you must enter text");
		} else {
			$.post(web, {
				"userId": 1,
    				"id": 3,
    				"title": tin,
    				"body": "..."
    			})
		}
	});	
*/

//task_14
/*
	$("#addbutton").click(function(){
		var tin = $("#textinput").val();
		if (tin == null || tin == ""){
			alert("you must enter text");
		} else {
			$.post(web, {
				"userId": 1,
				"id": 3,
    				"title": tin,
    				"body": "..."
    		},function(result){
    			var rezil = $(result).attr("id");
    			var web2 = "http://jsonplaceholder.typicode.com/posts/" + rezil;
    			$.get(web2,function(result){
    					var sveg = $(result).attr("title");
    					$("#posts").append('<li> '+sveg+' </li>');
    			});
    		});
		}
	});
*/

//task_15
/*
	$("#addbutton").click(function(){
		var tin = $("#textinput").val();
		if (tin == null || tin == ""){
			alert("you must enter text");
		} else {
			$.post(web, {
				    "userId": 1,
				    "id": 3,
    				"title": tin,
    				"body": "..."
    			},function(result){
    				var rezil = $(result).attr("id");
    				var web2 = "http://jsonplaceholder.typicode.com/posts/" + rezil;
    				$.get(web2,function(result){
    					var sveg = $(result).attr("title");
    					$("#posts").append('<li> '+(sveg)+' </li>');
    					$("#posts :last").append('<button onclick=alert("deleting")> X </button>');
    				});
    			});
		}
	});
*/

//task_16
	$("#addbutton").click(function(){
		var tin = $("#textinput").val();
		if (tin == null || tin == ""){
			alert("you must enter text");
		} else {
			$.post(web, {
				    "userId": 1,
				    "id": 3,
    				"title": tin,
    				"body": "..."
    			},function(result){
    				var rezil = $(result).attr("id");
    				var web2 = "http://jsonplaceholder.typicode.com/posts/" + rezil;
    				$.get(web2,function(result){
    					var sveg = $(result).attr("title");
    					var $button = $('<button>X</button>').click(function () { zap(web2, $button); })
    					$("#posts").append($('<li> '+(sveg)+' </li>').append($button));

    				});
    			});
		}
	});
	function zap(web2, $button) { 
		var r = confirm("deleting");
		if (r == true) {
			$.ajax({
    			url: web2,
    			type: 'DELETE',
    			success: function(result) {
       				 $button.parent().remove();
   				 }
			});
		}
	}
	
//task_17
	$("#posts").prepend('<input id="input666"></input');
	
//task_18
/*
	$("#input666").change(function(){
		var inval = $("#input666").val();
		var web3 = "http://jsonplaceholder.typicode.com/posts?userId=" + inval ;
		$.get(web3, function(result){
			for (var i=0; i<result.length; i++){
				$("#posts").append('<li> '+$(result[i]).attr("title")+' </li>');
			}
		});
	});
*/

//task_19
/*
	$("#input666").change(function(){
		var inval = $("#input666").val();
		var web3 = "http://jsonplaceholder.typicode.com/posts?userId=" + inval ;
		$("li").remove();
		$.get(web3, function(result){
			for (var i=0; i<result.length; i++){
				$("#posts").append('<li> '+$(result[i]).attr("title")+' </li>');
			}
		});
	});
*/

//task_20
	$("#input666").change(function(){
		var inval = $("#input666").val();
		var web3 = "http://jsonplaceholder.typicode.com/posts?userId=" + inval ;
		$("li").remove();
		$.get(web3, function(result){
			for (var i=0; i<result.length; i++){
				var web4 = web + "/" + $(result[i]).attr("id");
				var $button = $('<button>X</button>').click(function () { zap(web4, $button); })
				$("#posts").append($('<li> '+$(result[i]).attr("title")+' </li>').append($button));
			}
		});
	});

});
