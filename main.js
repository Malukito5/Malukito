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
if(casaAposta === 0){ 
h00={min:[3,6,19,23,39,49,52,53,56,58],alcanse:[]},
	h1={min:[4,8,12,13,14,47,50,57],alcanse:[]},
	h2={min:[51,54,58],alcanse:["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
	h3={min:[11,17,20,23,27,28,32,34,44,58],alcanse:["5x 20x 50x+","5x 20x 50x+"]},
	h4={min:[12,27,40],alcanse:[]},
	h5={min:[7,20,28,30,54],alcanse:[]},
	h6={min:[2,14,48,51],alcanse:["5x-50x"]},
	h7={min:[35,41,50,51, 55, 58],alcanse:["5x-50x"]},
	h8={min:[00,1,28,40,45,57],alcanse:["5x-50x","5x-50x","5x-50x"]},
	h9={min:[2,4,8,9,13,15,18,22,24,33,36,37,38,39,41,42,46,47,49],alcanse:[]},
	h10={min:[2.5,7,9,14,16,19,22,23,28,32,33,37,38,40,42,43,45,48,50,51,55,56],alcanse:[0,"5x-50x",0,0,0,0,0,0,0,"5x-20x"]},
	h11={min:[0,1, 4,5,20,21,25,35,37,43,46,49,51],alcanse:[0,"5x-50x",0,"5x-15x",0,0,"5x-40x"]},
	h12={min:[10,13,14,16,18,20,30,31,36,37,38,55,56],alcanse:["5x-15x","5x-15x","5x-20x","5x-40x","5x-50x"]},
	h13={min:[5,10,16,18,24,27,28,33,37,40,48,50,55,57],alcanse:[]},
	h14={min:[00,2,5,15,17,19,28,36,37,41,43,55],alcanse:[0,0]},
	h15={min:[0,2,4,7,8,11,13,15,18,19,22,27,29,31,32],alcanse:[]},
	h16={min:[23,28,32,33,35,42,43,47,50,57],alcanse:["5x-50x",0,]},
	h17={min:[4,8,22,25,30,38,40,42,43],alcanse:[0,0,0,"5x-20x","5x-30x","5x-30x"]}
	,h18={min:[41,45,48,50,53,56],alcanse:[]},
	h19={min:[9,6,20,23,26,28,31,36,41,43,45],alcanse:["P:3-5x A:10x-17x","P4-8x A:15x-38x","P:3-5x A:10x-18x","P:5-12x A:20x-80x"]},
	h20={min:[0,11,21,28,31,36,37,43,53],alcanse:[]},
	h21={min:[8,16,23,24,26,28,51,53,55,56],alcanse:[]},
	h22={min:[3,16,18,19,23,44,49,54,56],alcanse:[]},
	h23={min:[2,4,11,12,18,25,30,35,38,45,47,58],alcanse:[]}
}

else{
h00={min:[],alcanse:[]},
h1={min:[00,12,19,20,21,25,33,36,41,58],alcanse:["5x 20x 50x+"]},
h2={min:[2,4],alcanse:["5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h3={min:[3,6,11,14,17,20,24,31,34,44,46,47,53,57,59],alcanse:["5x 20x 50x+"]},
h4={min:[17,49,57],alcanse:[]},
h5={min:[3,18,22,31,35,40,44,59],alcanse:["5x 20x 50x+","5x 20x 50x+"]},
h6={min:[11,12,21,52],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h7={min:[19,22,24,26,28,29,33,42,49,54],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 10x 15x+","5x 10x+","5x 10x 15x+"]},
h8={min:[1,2,13,15,27,32,41,53,55],alcanse:["5x 10x","5x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h9={min:[13,19,29,46,49,57],alcanse:[]},
h10={min:[2,42],alcanse:[]},
h11={min:[16,17,26,27,31,35,38,45,48,49,53],alcanse:[]},
h12={min:[1,16,28,51],alcanse:["5x 20x 40x 100x","5x 20x 50x+","5x 20x 50x+","5x 20x 50x+"]},
h13={min:[4,7,10,18,20,23,26,27,29,24,33,34,38,41,43,45,49,55,58,59],alcanse:[]},
h14={min:[1,2,8,9,17,20,21,30,31,37,40,49,51,53,54,59],alcanse:[]},
h15={min:[0,2,4,6,8,9,12,13,14,16,17,22,27,30,32,37,47,59],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]},
h16={min:[7,11,38,40,46,48,49,52,53,56,59],alcanse:["5x 10x 20x+","5x 10x 15x+","5x 10x+","5x 10x+","5x+","5x+","5x+","5x"]},
h17={min:[0,2,4,8,11,19,26,32,50,58,59],alcanse:["5x 10x","5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+"]},
h18={min:[0,5,7,17,18,20,23,28,32,34,37,39,54],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x 10x+","5x 10x 20x+"]},
h19={min:[3,6,8,11,24,30,32,36,38,39,41,45,51],alcanse:["5x 10x 20x+","5x 10x 15x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]},
h20={min:[6,10,16,19,20,22,24,25,28,43,45,53,55,59],alcanse:["5x 10x+","5x 10x 15x 30x+","5x+","5x+","5x+","5x+","5x+","5x 10x+"]},
h21={min:[8,9,11,18,22,27,32,34,37,45,47,48,52,54,56],alcanse:["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x 20x 35x+"]},
h22={min:[8,9,11,18,24,28,29,37,39,42,55],alcanse:["5x+","5x+","5x 10x 25x+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]},
h23={min:[8,9,11,18,22,27,29,37,39,42,44],alcanse:["5x+","5x+","5x 10+","5x+","5x 10+","5x 10x 20x 50x+","5x 10+","5x+","5x 10x 15x+","5x 10x"]}

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
