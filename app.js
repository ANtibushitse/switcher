var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

var lili = {
	tata    : "cat.jpg",

};

function main(){

$('button').click(function(){

	var coolVar = $(this).data('animal');
	$("img").attr("src","img/"+species[coolVar]);

});

 };
	
	

	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
}

$(document).ready(function(){
	main();
});

































































