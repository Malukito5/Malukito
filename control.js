var user={
	num : ['123'],
	senha: ['Malukito']
}
var casaAposta = 0, h1;

var login = function(){
	h1 = seek('h1');
	var input = seek('login input','c');

		if (input[0].value == '') { h1.innerHTML='coloque o numero ou contacte o criador';}
		else if (input[0].value == '') { h1.innerHTML='coloque a senha ou contacte o criador';}
		else{
			for (var i=0; i<user.num.length; ++i) {
				if (user.num[i]==input[0].value && user.senha[i] == input[1].value) {
					seek('.login').style.display='none';
					h1.innerHTML='Escolha sua casa de aposta';
					seek('.choose').style.display='block';break;}
					
			}
		}

	
}

var choose = function(num){
	
	casaAposta=num;
	seek('.choose').style.display='none';
	h1.innerHTML='Bem-vindo e boa sorte!';
	seek('.Palpites').style.display='block';
	seek('.hour').style.display='block';
}