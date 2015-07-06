 
 
 var content = { titre: 'Best Pirate Game Ever', 
 				 description : 'does it really need a description ?'
 				};
 				 
 var app = angular.module('homePage', []);

app.controller('HomePageController', function(){
  this.content = content;
  
  this.changeText=function(){
	  this.content.description="Good Choice";
  };
});



