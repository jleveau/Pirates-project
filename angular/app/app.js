 
var Map = document.getElementById('Map');
 
 var content = { titre: 'Best Pirate Game Ever', 
 				 description : 'More Rhum, More Rhum, More Rhum for the Pirates, Hey !',
 				 canvas : Map
 				};
 				 
 var app = angular.module('homePage', []);

app.controller('HomePageController', function(){
  this.content = content;
  
  this.changeText=function(){
	  this.content.description="Good Choice";
  };
});



