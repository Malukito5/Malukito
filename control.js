var user={
	num : ["123",'906',"550","111","892","888","502","300"],
	senha: ["mel","estrela","brita","festa","escuro","abelha","lobo","test"],
	time: [new Date("2024/11/24"),new Date("2024/11/4"),new Date("2024/11/6"),new Date("2024/11/30"),new Date("2024/11/26"),new Date("2024/11/21"), new Date("2024/11/2"),new Date("2024/10/31") ]
};
var casaAposta, h1;

var login = function(){
	var date = new Date();
	var month = date.getMonth(),userM;
   	var year = date.getFullYear();
	var day = date.getDate(),userD,exp;
	
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
					exp =(userM > month)? (30-day)+userD:exp=userD - day;
				if(exp > 0){
					
					console.log("in");
					seek('.login').style.display='none';
					h1.innerHTML='Escolha sua casa de aposta';
					seek(".add").style.display="block";
					seek("#left").innerHTML= userD+"/"+(userM+1)+"/"+userY;
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


	

