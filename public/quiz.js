console.log($);


$.ajax({
	method: "GET",
	url: "/Marco",
}).done(function(montableau) {
		//console.log( "success" );  
		console.log(montableau); // afficher message if / else en fonction de la reponse du serveur

}).fail(function() {
		console.log( "error" );
});
