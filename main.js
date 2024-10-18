onerror= function (sms, url, line) {
	var titulo = 'Erro encontrado: '
	console.log(titulo+sms);
	console.log(titulo+"localização: "+ url);
	console.log(titulo+"linha: "+ line);
	// body...
}

function seek(ent, type, exc) {
	if(!exc){exc=document;}

	switch(type){
	case "q" : return exc.querySelector(ent);
	case "c" : return exc.querySelectorAll("."+ent);
	case "id" : return exc.querySelector("#"+ent);
	default:  return exc.querySelector(ent);
	}
	// body...
}

var h00 = {min : [],alcanse: []};
var h1 = {min : [],alcanse: []};
var h2 = {min : [],alcanse: []};
var h3 = {min : [],alcanse: []};
var h4 = {min : [],alcanse: []};
var h5= {min : [],alcanse: []};
var h6 = {min : [],alcanse: []};
var h7 = {min : [],alcanse: []};
var h8 = {min : [],alcanse: []};
var h9 = {min : [31,33,37, 39,41,42, 45,48,52,54, 55],
alcanse: ["8x 11x",'10x 20x 40x', '5x 7x 12x', '5x 9x', '5x 7x', '5x 7x', '10x 20x 30x 60x', '7x 10x', '5x 10x']};

var h10 = {min : [01, 04,07, 08,10,15,22, 24, 36, 39,42,44,47,50,54,59],
alcanse: ['10x 15x 20x','10x 14x 19x','5x 7x', '7x 12x 15x','8x 18x 25x','5x 6x','5x 9x 11x', '5x 7x', '20x 50x 100x+','10x 20x 35x','10x 20x 35x','7x 10c','10x 20x','8x 15x', '5x','10x 20x 50x 80x']};
var h11 = {min : [33],alcanse: ['5x 20x 40x 100x']};
var h12 = {min : [],alcanse: []};
var h13 = {min : [],alcanse: []};
var h14 = {min : [],alcanse: []};
var h15= {min : [],alcanse: []};
var h16 = {min : [],alcanse: []};
var h17 = {min : [],alcanse: []};
var h18 = {min : [],alcanse: []};
var h19 = {min : [],alcanse: []};

var h20 = {min : [],alcanse: []};
var h21 = {min : [],alcanse: []};
var h22 = {min : [],alcanse: []};
var h23 = {min : [],alcanse: []};



if (casaAposta==1) {
 h00 = {min : [],alcanse: []};
 h1 = {min : [],alcanse: []};
 h2 = {min : [],alcanse: []};
 h3 = {min : [],alcanse: []};
 h4 = {min : [],alcanse: []};
 h5= {min : [],alcanse: []};
 h6 = {min : [],alcanse: []};
 h7 = {min : [],alcanse: []};
 h8 = {min : [],alcanse: []};
 h9 = {min : [],alcanse: []};

 h10 = {min : [],alcanse: []};
 h11 = {min : [],alcanse: []};
 h12 = {min : [],alcanse: []};
 h13 = {min : [],alcanse: []};
 h14 = {min : [],alcanse: []};
 h15= {min : [],alcanse: []};
 h16 = {min : [],alcanse: []};
 h17 = {min : [],alcanse: []};
 h18 = {min : [],alcanse: []};
 h19 = {min : [],alcanse: []};

 h20 = {min : [],alcanse: []};
 h21 = {min : [],alcanse: []};
 h22 = {min : [],alcanse: []};
 h23 = {min : [],alcanse: []};
 h24 = {min : [],alcanse: []};


}

function show(argument) {
	var palpites = seek('.Palpites ul');
	var time = new Date().getHours();
	var mints = new Date().getMinutes();

	var hora = "h"+time;
	hora = eval(hora);

	palpites.innerHTML='';
	if (!hora.min.length) {palpites.innerHTML="<h2>Esta Hora não Possui palpites Ainda </h2>"; return false;}
	for (var i =0; i< hora.min.length; ++i) {
	if (hora.min[i] < mints) { continue;} 
		palpites.innerHTML+='<li><strong>'+time+'h:'+hora.min[i]+'min</strong> Alcanse possivel<em>: '+hora.alcanse[i]+'<em></li>';
	}
}
show();
setInterval(show,9000);


var contac = function(disp){
	var num = seek('.contac');
	if (disp) {num.style.display = 'none';}
		else{num.style.display = 'block';}
}

