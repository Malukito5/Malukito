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
 h00 = {min : [3,6,19,23,39,49,52,53,56,58],
alcanse: []};
 h1 = {min : [4,8,13,14,16,19,21,24,33,29,37,43,46,48,49,58,59],
alcanse: []};
 h2 = {min : [15,18,22,30,32,35,37,44,52],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h3 = {min : [1,17,23,26,28],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h4 = {min : [2,23,33,40,44,46,49,51,55,59],
alcanse: ["5x+","5x 10x 35x 50x+","5x 10+","5x+","5x 10+","5x+","5x 10+","5x+"]};
 h5= {min : [19,27,28,32,35,37,40,49,50,56,58],alcanse: ["P:3-5x A:10x-20x","P:5-9x A:15x-27x","P:5-15x A:20x-80x","P:3-5x A:10x-17x"]};
 h6 = {min : [7,11,22,20,30,39,51],alcanse: [0,"P:5-15x A:20x-80x","P:5-15x A:20x-50x","P:3-5x A:10x-17x","P:3-5x A:10x-17x","P:3-5x A:10x-17x","P:5-15x A:10x-30x"]};
 h7 = {min : [27,37,40,44,46,52,54],alcanse: ["5x 10x 25x 35x 50x+","5x 10x 15x+","5x 10x+","5x 10x+","5x 10x","5x 20x 50x+","5x 10x+","5x 10x+","5x+","5x 10x 20x 35x+"]};
 h8 = {min : [1,2,4,12,14,16,18,22,24,25,27,30,33,35,42,43,51,52,54,58],alcanse: ["5x+","5x 10x 15x+","5x+","5x 20x 50x+","5x 10x 15x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x 15x+","5x 10x 15x+","5x+","5x 10x 25x+", "5x 10x 25x+"]};
 h9 = {min : [4,7,10,12,14,28,31,32,35,39,42,53,55,59],
alcanse: []};

 h10 = {min : [4,5,9,10,17,21,28,35,43,55,57,59],
alcanse: ['10x 15x 20x','10x 14x 19x','5x 7x',"5x 10x","5x 10x", '7x 12x 15x','8x 18x 25x','5x 6x','5x 9x 11x', '5x 7x', '20x 50x 100x+','10x 20x 35x','10x 20x 35x','7x 10c','10x 20x','8x 15x', '5x','10x 20x 50x 80x']};
 h11 = {min : [06,12,15,17,20,23,24,29,21,25,27,28,31,35,55,56,59],alcanse: ["P:5-15x A:20x-80x","P:5-15x A:10x-25x","P:5-15x A:10x-40x","P:3-5x A:10x-17x",0]};
 h12 = {min : [31,36,37,55,56],
alcanse: ["5x-15x","5x-15x","5x-20x","5x-40x","5x-50x"]};
 h13 = {min : [13,14,19,20,22,24,33,35,39],
alcanse: ["5x-16x","5x-10x","5x-20x","5x-15x","5x-50x"]};
 h14 = {min : [16,17,19,41,46],
alcanse: [0,0]};
 h15= {min : [00,8,13,15,17,25],alcanse: ["5x","5x 10x","5x 10x","5x 10x","5x 10x",0,"5x 15x 30x+","5x 10x 15x+"]};
 h16 = {min : [30,31,37,41,43,45,52],
alcanse: ["5x 10x 30x+","5x","5x 10x 30x 50x+",0,0,0,0,0,0,0,0,0,"5x 10x 20x+",0]};
 h17 = {min :  [20,21,22,40,42,43],
alcanse: [0,0,0,"5x-20x","5x-30x","5x-30x"]};
 h18 = {min : [41,45,49,50,55,56],alcanse: []};
 h19 = {min :[00,6,20,23,26,28,31,36,41,43,45] ,alcanse: ["P:3-5x A:10x-17x", "P4-8x A:15x-38x", "P:3-5x A:10x-18x", "P:5-12x A:20x-80x"]};

 h20 = {min : [00,11,21,28,31,36,37,43,53],alcanse: []};
 h21 = {min :[8,16,23,24,26,28,51,53,55,56],alcanse:[]};
 h22 = {min : [3,16,18,19,23,44,49,54,56],alcanse: ["5x 10x 30x 50x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x","5x 10x+"]};
 h23 = {min : [2,4,11,12,18,25,30,35,38,45,47,58],alcanse: []};

}

else{
 h00 = {min : [],alcanse: []};
 h1 = {min : [12,18,20,21,33,36,41,58],alcanse: ["5x 20x 50x+"]};
 h2 = {min : [1,15,16,23,26,33,36,41,48,56,58],alcanse: ["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h3 = {min : [7,11,14,17,20,24,44,46,47,53,59],alcanse: ["5x 20x 50x+"]};
 h4 = {min : [17,18,20,33,38,48,54],alcanse: []};
 h5= {min : [12,13,15,21,22,23,24,27,29,32,39,43,46,47,48,49,51,53,54,56,57],alcanse: ["5x 20x 50x+","5x 20x 50x+"]};
 h6 = {min : [1,8,11,12,14,26,32,36,42,51,55],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h7 = {min : [19,22,24,26,28,29,33,42,49,54],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x+","5x 10x 15x+"]};
 h8 = {min : [13,15,22,24,32,36,38,42,44,45,57],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h9 = {min : [00,2,5,8,12,14,21,22,26,30,32,34,36,44],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};

 h10 = {min : [4,8,11,14,26,32,36,42],alcanse: ["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h11 = {min : [5,8,9,17,26,34,37,43,46,52],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
  h12 = {min : [5,8,9,17,26,34,37,40,43,46,49,50,52,56,59],alcanse: ['5x 20x 40x 100x',"5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]};
 h13 = {min : [4,7,10,26,29,24,34,38,41, 43, 45, 49,55,58, 59],alcanse: ["5x", "5x 10x","5x 12x", "5x 15x", "5x 10x 20x", "5x 10x", "5x"]};
 h14 = {min : [3,6,8,11,12, 13, 20,25,27,34,35,39,43,45,47,48,51],
 alcanse: ["5x 10x 15x 20x", "5x+","5x+","5x 10x", "5x+", "5x 10x 20x 30x 40x+", "5x 10x 25x 35x+","5x 10x 25x 35x+","5x 10x 15x","5x 20x 50x+","5x 10x 15x","5x","5x 10x","5x","5x 10x"]};
 h15= {min : [0,3,6,12,14,16,20,47,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h16 = {min : [7,11,38,40,45,48,49,52,53,56,59],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x 10x+","5x 10x+","5x+","5x+","5x+","5x"]};
 h17 = {min : [58,59],alcanse: ["5x 10x","5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]};
 h18 = {min : [00,5,7,17,18,20,23,28,32,34,37,39,54],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x 10x+","5x 10x 20x+"]};
 h19 = {min : [00,3,6,8,11,24,30,32,36,38,39,41,45,51],alcanse: ["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]};

 h20 = {min : [6,10,16,19,20,22,24,25,28,43,45,53,55,59],alcanse: ["5x 10x+","5x 10x 15x 30x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]};
 h21 = {min : [8,9,11,18,22,27,32,34,37,45, 47,48,52,54,56],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x 20x 35x+"]};
 h22 = {min : [8,9,11,18,24,28,29,37,39,42, 55],alcanse: ["5x+","5x+","5x 10x 25x+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};
 h23 = {min : [8,9,11,18,22,27,29,37,39,42, 44],alcanse: ["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]};


}}


function show(argument) {
	data(); showinfo();
	var alc =function(val){if(!val){return "5x 10x+";}else return val;}
	var palpites = seek('.Palpites ul');
	var time = new Date().getHours();
	var mints = new Date().getMinutes();
 
	var hora = "h"+time;
	hora = eval(hora);

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

var frases =["Horas boa 8h, 10h, 14h, 22h,5h","Tem graficos que atrasam 1min","tire sempre proteção uma das casas","Faça 3 tentativas nos palpites","Antes de seguir veja se o grafico é estavel","Faça metas, não jogue durante varias horas",
"faça o curso do Malukito pra incrimentar suas habilidades de lucro","O boot é actualizado todos dias não se desanime","Tenha uma boa sorte","se falhar 3 palpites consecutivos aguarde melhor momento","Os palpites serão calculados por hora", 
"Paciência é uma virtude", "Jogue com ambição apenas nos lucros","O mais importante não é ganhar, é não perder - Malukito o Rei"
];

function showinfo(){
	var info = seek("#info");
	var random = Math.floor(Math.random() * frases.length);
	info.innerHTML=frases[random];
}
