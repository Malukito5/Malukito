var user={
	num : ['755',"890"],
	senha: [Cubo,"Luz"]
};
var casaAposta, h1;

var login = function(){
	h1 = seek('h1');
	var input = seek('login input','c');

		if (input[0].value == '') { h1.innerHTML='coloque o numero ou contacte o criador';}
		else if (input[0].value == '') { h1.innerHTML='coloque a senha ou contacte o criador';}
		else{console.log("Holla");
			for (var i=0; i<user.num.length; ++i) {
				if (trimer(user.num[i])==trimer(input[0].value) && trimer(user.senha[i]) == trimer(input[1].value)) {
					console.log("in");
					seek('.login').style.display='none';
					h1.innerHTML='Escolha sua casa de aposta';
					seek('.choose').style.display='block';break;}
					else{console.log("not in");}
					
			}
		}

	
}

var choose = function(num){
	
	casaAposta=num;
	seek('.choose').style.display='none';
	h1.innerHTML='Bem-vindo e boa sorte!';
	show();
setInterval(show,9000);
	seek('.Palpites').style.display='block';
	seek('.hour').style.display='block';
}
var trimer=function(str){
	str = str.trim();
	str = str.toLowerCase();
	return str;
}
