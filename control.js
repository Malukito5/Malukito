var user={
	num : ['755',"890","333","891","888"],
	senha: ["Cubo","Luz","festa","Brilho","Vida"],
	time: [new Date("2024/10/23"),new Date("2024/10/22"),new Date("2024/10/27"),new Date("2024/10/24"),new Date("2024/11/21")]
};
var casaAposta, h1;

var login = function(){
	var date = new Date();
	var month = date.getMonth(),userM;
   	var year = date.getFullYear();
	var day = date.getDate(),userD;
	var time = new Date();
	h1 = seek('h1');
	var input = seek('login input','c');

		if (input[0].value == '') { h1.innerHTML='coloque o numero ou contacte o criador';}
		else if (input[0].value == '') { h1.innerHTML='coloque a senha ou contacte o criador';}
		else{console.log("Holla");
			for (var i=0; i<user.num.length; ++i) {
				if (trimer(user.num[i])==trimer(input[0].value) && trimer(user.senha[i]) == trimer(input[1].value)) {
					userD = user.time[i].getDate();
					userM = user.time[i].getMonth();
					userY = user.time[i].getFullYear();
				if(userD > day && userM >= month){
					
					console.log("in");
					seek('.login').style.display='none';
					h1.innerHTML='Escolha sua casa de aposta';
					seek(".add").style.display="block";
					seek("#left").innerHTML= userD+"/"+userM+"/"+userY;
					seek('.choose').style.display='block';break;
				}else{alert(" Seu tempo expirou renove o acesso");}
					
				}else{console.log("not in");}
					
			}
		}

	
};

var choose = function(num){
	
	casaAposta=num;
	seek('.choose').style.display='none';
	h1.innerHTML='Bem-vindo e boa sorte!';
	show();
setInterval(show,9000);
	seek('.Palpites').style.display='block';
	seek('.hour').style.display='block';
};
var trimer=function(str){
	str = str.trim();
	str = str.toLowerCase();
	return str;
};

