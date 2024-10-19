onerror= function (sms, url, line) {
	var titulo = 'Erro encontrado: '
	alert(titulo+sms);
	alert(titulo+"localização: "+ url);
	alert(titulo+"linha: "+ line);
	// body...
};

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
var h00h1, h2, h3, h4, h5,h6, h7, h8, h9, h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23;

function data(){
if(casaAposta === 1){ 
 h00 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
 h1 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x+","5x 10 35x 50x+","5x+","5x 10+","5x+","5x 10+","5x+"]};
 h2 = {min : [9,35,40,47],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h3 = {min : [29,55],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h4 = {min : [9,12,22,29,40,47,49,55],
alcanse: ["5x+","5x 10x 35x 50x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
 h5= {min : [40,49,59],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x+"]};
 h6 = {min : [00,3,4,8,11,16,20,26,29,34,41,43],alcanse: ["5x 10x 25x 35x+","5x 10x 15x+","5x 10x 25x 35x+","5x 10x+","5x+","5x+","5x+","5x 10x 15x+","5x 10 35x 50x+","5x+","5x 10+","5x+","5x 10+","5x+"]};
 h7 = {min : [11,15,22,23,27,31,38,42,44,48,56,58],alcanse: ["5x 10x 25x 35x 50x+","5x 10x 15x+","5x 10x+","5x 10x+","5x 10x","5x 20x 50x+","5x 10x+","5x 10x+","5x+","5x 10x 20x 35x+"]};
 h8 = {min : [1,4,6,10,14,16,25,26,34,36,39,56,58],alcanse: ["5x+","5x 10x 15x+","5x+","5x 20x 50x+","5x 10x 15x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x 15x+","5x 10x 15x+","5x+","5x 10x 25x+", "5x 10x 25x+"]};
 h9 = {min : [00,21,29,31,33,37, 39,41,42, 45,48,52,54, 55],
alcanse: ["5x 10x 25x 35x+","5x 15x 25x+","5x 15x 25x+","8x 11x",'10x 20x 40x', '5x 7x 12x', '5x 9x', '5x 7x', '5x 7x', '10x 20x 30x 60x', '7x 10x', '5x 10x',"5x 10x","5x 10x","5x 10x"]};

 h10 = {min : [1, 4,7, 8,10,15,22, 24,28,30,32, 36, 39,42,44,47,50,54,59],
alcanse: ['10x 15x 20x','10x 14x 19x','5x 7x',"5x 10x","5x 10x", '7x 12x 15x','8x 18x 25x','5x 6x','5x 9x 11x', '5x 7x', '20x 50x 100x+','10x 20x 35x','10x 20x 35x','7x 10c','10x 20x','8x 15x', '5x','10x 20x 50x 80x']};
 h11 = {min : [5,8,9,17,26,34,37,43,46,52],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h12 = {min : [5,8,9,17,26,34,37,40,43,46,52],
alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h13 = {min : [5,8,14,21,27,29,35,38,39, 41,42, 45,49, 51, 52, 55,56, 58],
alcanse: ["5x 10x", "5x 7x", "5x 7x", "5x 10x 50x", "5x 10x","5x 10x", "5x 10x 17x","5x 12x"]};
 h14 = {min : [1,4,6,9,11,13,15,17,23,25,41,58],
alcanse: ["5x 10x 17x","5x 12x","5x 10x","5x+","5x 10x","5x 10x 25x 50x+","5x 10x 20x 35x+", "5x 10x","5x 20x 50x+","5x 10x 15x","5x 10x"]};
 h15= {min : [1,5,10,13,15,19,20],alcanse: ["5x","5x 10x","5x 10x","5x 10x","5x 10x"]};
 h16 = {min : [1,5,7,10,17,18,31,37,44,45,58],
alcanse: ["5x+","5x 10x","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10x 20x 40x+","5x+"]};
 h17 = {min :  [1,3,11,14,17,18,20,27,29,30,40,51,56,57,59],
alcanse: ["5x+","5x+","5x+","5x 10x","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x","5x 10x+","5x 10x+","5x 10x+","5x 10x+"]};
 h18 = {min : [4,6,10,13,17,20,24,29,32,35,36],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 35x 50x+"]};
 h19 = {min : [2,7,12,15,22,26,29,34,35,39, 42],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};

 h20 = {min : [2,4,8,11,15,21,24,27,35,39, 42],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};
 h21 = {min : [7,12,14,19,20,22,24,27,36,44, 49],alcanse: ["5x 10x 30x 50x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x","5x 10x+"]};
 h22 = {min : [4,5,11,15,18,19,24,27,36,44, 49],alcanse: ["5x 10x 30x 50x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x","5x 10x+"]};
 h23 = {min : [7,12,14,19,20,22,24,27,36,44, 49],alcanse: ["5x 10x 30x 50x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x 25x 35x+","5x 10x","5x 10x+"]};

}

else{
 h00 = {min : [],alcanse: []};
 h1 = {min : [37],alcanse: ["5x 20x 50x+"]};
 h2 = {min : [36,48,58],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h3 = {min : [14],alcanse: ["5x 20x 50x+"]};
 h4 = {min : [],alcanse: []};
 h5= {min : [19,27],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h6 = {min : [8,11,14,26,32,36,42],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h7 = {min : [19,22,24,26,28,29,34,42,49,54],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x+","5x 10x 15x+"]};
 h8 = {min : [13,15,22,24,32,36,42],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h9 = {min : [8,11,14,26,32,36,44],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};

 h10 = {min : [8,11,14,26,32,36,42],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h11 = {min : [5,8,9,17,26,34,37,43,46,52],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
  h12 = {min : [5,8,9,17,26,34,37,43,46,52],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h13 = {min : [41, 43, 45, 49,55,58, 59],alcanse: ["5x", "5x 10x","5x 12x", "5x 15x", "5x 10x 20x", "5x 10x", "5x"]};
 h14 = {min : [3,6,8,11,12, 13, 17,24,27,33,35,39,42,47,51],
 alcanse: ["5x 10x 15x 20x", "5x+","5x+","5x 10x", "5x+", "5x 10x 20x 30x 40x+", "5x 10x 25x 35x+","5x 10x 25x 35x+","5x 10x 15x","5x 20x 50x+","5x 10x 15x","5x","5x 10x","5x","5x 10x"]};
 h15= {min : [0,3,6,12,14,16,20],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h16 = {min : [38,40,45,48,50,49,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x 10x+","5x 10x+","5x+","5x+","5x+","5x"]};
 h17 = {min : [3,6,11,16,18,23,41],alcanse: ["5x 10x","5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h18 = {min : [18,20,26,28,32,34,37,39],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x 10x+","5x 10x 20x+"]};
 h19 = {min : [3,6,8,11,21,23,26,28,30],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]};

 h20 = {min : [17,21,27,29,43,45,53,55,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]};
 h21 = {min : [8,9,11,18,22,27,29,37,39,42, 55],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x 20x 35x+"]};
 h22 = {min : [8,9,11,18,22,27,29,37,39,42, 55],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};
 h23 = {min : [8,9,11,18,22,27,29,37,39,42, 44],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};


}}

function show(argument) {
	data();
	var alc =function(val){if(!val){return "5x 10x+";}else return val;}
	var palpites = seek('.Palpites ul');
	var time = new Date().getHours();
	var mints = new Date().getMinutes();
 
	var hora = h16;
	//hora = eval(hora);

	palpites.innerHTML='';
	if (!hora.min.length) {palpites.innerHTML="<h2>Esta Hora não Possui palpites Ainda </h2>"; return false;}
	for (var i =0; i< hora.min.length; ++i) {
	if (hora.min[i] < mints) {continue; } 
	
		palpites.innerHTML+='<li><strong>'+time+'h:'+hora.min[i]+'min</strong> Alcanse possivel<em>: '+alc(hora.alcanse[i])+'<em></li>';
	}
	palpites.innerHTML+='<li><strong>Calculando Novos palpites ...</strong></li>';
}



var contac = function(disp){
	var num = seek('.contac');
	if (disp) {num.style.display = 'none';}
		else{num.style.display = 'block';}
}
var refresh=function(){
	window.location.reload();
};
