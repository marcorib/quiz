var tab = [];
var quest ;
var next ;
var reponse ;

$.ajax({
	method: "GET",
	url: "/Marco",

}).done(function(arraQ)
{
	
	for (var i = 0; i < arraQ.length; i++) 
	{
		tab.push(arraQ[i]);
	};
	console.log(tab);
});


$('#btnQues').on('click','.start', function ()

{
	quest = parseInt($(this).val());
	console.log(quest);

	$('#btnQues').empty();
	$('#btnQues').append('<table><thead><tr><th> Question : '+tab[quest].ID+'</th></tr><tr><th>'+tab[quest].Question+'</th></tr></thead><tbody id="answer"></tbody>');

	$('#answer').append('<tr><td><button  class="rep" id="test">'+tab[quest].Reponse_1+'</button></td><td><button class="rep" id="test2">'+tab[quest].Reponse_2+'</button></td></tr>');
	$('#answer').append('<tr><td><button  class="rep" id="test1">'+tab[quest].Reponse_3+'</button></td><td><button  class="rep" id="test3">'+tab[quest].Reponse_4+'</button></td></tr>');



$('#btnQues').on('click', '.rep', function()
{

	reponse = $(this).html();
	$('.rep').prop('disabled', true);

	if (reponse == "Watson") {

		$(this).css('background-color', 'green');
	}else if (reponse == 'Reagan') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Le cardinal de Richelieu') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Le Rhin') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Le court') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Londres') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Neil Armstrong'){
		$(this).css('background-color', 'green');
	}else if (reponse == 'Les coquillages') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Amazone') {
		$(this).css('background-color', 'green');
	}else if (reponse == 'Les Chinois') {
		$(this).css('background-color', 'green');
	}else{
		$(this).css('background-color', 'red');
	}

});
$('#btnQues').append('<button id="moins" class="start btn btn-primary" value="'+(quest-1)+'" >Back</button>');
		$('#btnQues').append('<button id="plus" class="start btn btn-primary" value="'+(quest+1)+'"  >Next</button>');
});
