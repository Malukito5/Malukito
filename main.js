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

var h00 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h1 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x+","5x 10 35x 50x+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h2 = {min : [9,35,40,47],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
var h3 = {min : [29,55],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
var h4 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x 10x 35x 50x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h5= {min : [40,49],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
var h6 = {min : [10,16,39,40,49,52],alcanse: ["5x+","5x+","5x 10 35x 50x+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h7 = {min : [52],alcanse: ["5x 20x 50x+"]};
var h8 = {min : [10,16,39],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
var h9 = {min : [31,33,37, 39,41,42, 45,48,52,54, 55],
alcanse: ["8x 11x",'10x 20x 40x', '5x 7x 12x', '5x 9x', '5x 7x', '5x 7x', '10x 20x 30x 60x', '7x 10x', '5x 10x']};

var h10 = {min : [1, 4,7, 8,10,15,22, 24, 36, 39,42,44,47,50,54,59],
alcanse: ['10x 15x 20x','10x 14x 19x','5x 7x', '7x 12x 15x','8x 18x 25x','5x 6x','5x 9x 11x', '5x 7x', '20x 50x 100x+','10x 20x 35x','10x 20x 35x','7x 10c','10x 20x','8x 15x', '5x','10x 20x 50x 80x']};
var h11 = {min : [9,21,35,46],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
var h12 = {min : [],alcanse: []};
var h13 = {min : [39, 41,42, 49, 51, 52, 53, 58],
alcanse: ["5x 10x", "5x 7x", "5x 7x", "5x 10x 50x", "5x 10x","5x 10x", "5x 10x 17x","5x 12x"]};
var h14 = {min : [1,4,10,12,15,17,23,25,41,58],
alcanse: ["5x 10x 17x","5x 12x","5x 10x","5x+","5x 10x","5x 10x 25x 50x+","5x 10x 20x 35x+", "5x 10x","5x 20x 50x+","5x 10x 15x","5x 10x"]};
var h15= {min : [1,5,10,13,15,19,20],alcanse: ["5x","5x 10x","5x 10x","5x 10x","5x 10x"]};
var h16 = {min : [1,10,12,15,22,25,41,49,52,58],
alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h17 = {min :  [1,10,12,15,22,25,41,49,52,58],
alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h18 = {min : [1,10,12,15,22,25,41,49,52,58],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
var h19 = {min : [1,10,12,15,22,25,41,49,52,58],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};

var h20 = {min : [],alcanse: []};
var h21 = {min : [],alcanse: []};
var h22 = {min : [],alcanse: []};
var h23 = {min : [],alcanse: []};



if (casaAposta==1) {
 h00 = {min : [],alcanse: []};
 h1 = {min : [37],alcanse: ["5x 20x 50x+"]};
 h2 = {min : [36,48,58],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h3 = {min : [14],alcanse: ["5x 20x 50x+"]};
 h4 = {min : [],alcanse: []};
 h5= {min : [19,27],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h6 = {min : [14,26,27,38],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h7 = {min : [],alcanse: []};
 h8 = {min : [28],alcanse: ["5x 20x 50x+"]};
 h9 = {min : [44],alcanse: ["5x 20x 50x+"]};

 h10 = {min : [],alcanse: []};
 h11 = {min : [15,26],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h12 = {min : [6,43],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h13 = {min : [41, 43, 45, 49,55,58, 59],alcanse: ["5x", "5x 10x","5x 12x", "5x 15x", "5x 10x 20x", "5x 10x", "5x"]};
 h14 = {min : [3,6,8,11,12, 13, 17,24,27,33,35,39,42,47,51],
 alcanse: ["5x 10x 15x 20x", "5x+","5x+","5x 10x", "5x+", "5x 10x 20x 30x 40x+", "5x 10x 25x 35x+","5x 10x 25x 35x+","5x 10x 15x","5x 20x 50x+","5x 10x 15x","5x","5x 10x","5x","5x 10x"]};
 h15= {min : [0,3,6,12,14,16,20],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h16 = {min : [3,6,12,41,43,49,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x"]};
 h17 = {min : [3,6,12,41,43,49,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x"]};
 h18 = {min : [3,6,12,41,43,49,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h19 = {min : [3,6,12,41,43,49,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};

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

