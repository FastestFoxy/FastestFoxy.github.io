var endereco = {
	rua: "Rua dos pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
};

var numero1="O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairo " + endereco.bairro + ", na rua " + endereco.rua + " com n° " + endereco.numero + ".";
var exercicio1 = document.createElement("p");
exercicio1.innerHTML = numero1;
var exercicio1Parent = document.getElementById("N1");
exercicio1Parent.appendChild(exercicio1);

/*      end of number 1      */


function pares(x, y){ var a=[], b=0;
	for(var i=x; i<y ;i++){
		if(i%2===0){ a[b]=i; b++;}
	}
	return a;
};

var numero2=pares(0, 10);
var exercicio2 = document.createElement("p");
exercicio2.innerHTML = numero2;
var exercicio2Parent = document.getElementById("N2");
exercicio2Parent.appendChild(exercicio2);

/*      end of number 2      */

function temHabilidade(skills) {
	var i=0;
	while(1){
		if(skills[i]=="Javascript"){return true; break;}
		i++
	}

}
var skills = ["Javascript", "ReactJS", "React Native"];

var numero3=temHabilidade(skills);
var exercicio3 = document.createElement("p");
exercicio3.innerHTML = numero3;
var exercicio3Parent = document.getElementById("N3");
exercicio3Parent.appendChild(exercicio3);

/*      end of number 3      */

function experiencia(anos) {
	if(anos>0&&anos<1) {return "Iniciante"}
	else if(anos>1&&anos<3) {return "Intermediário"}
	else if(anos>3&&anos<6) {return "Avaçado"}
	else if(anos>=7) {return "Jedi Master"}
	else {return "FOLLOW THE RULES !!!"}
}
var anosEstudo = 7;

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var numero4=experiencia(anosEstudo);
var exercicio4 = document.createElement("p");
exercicio4.innerHTML = numero4;
var exercicio4Parent = document.getElementById("N4");
exercicio4Parent.appendChild(exercicio4);

/*      end of number 4      */

var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];

function descricao(users){
	var z=[], i=0;
	for (const value of users){
		x=value;
		y=value;
		//console.log(y.nome);
		z[i]= x.habilidades.join(', ');
		//console.log(x.habilidades.join(', '));
		//console.log(z);
		i++;
	}
	//console.log(z[0]);

	var a="O " + users[0].nome + " possui as habilidades: "+ z[0] + ".";
	a+="<br>O " + users[1].nome + " possui as habilidades: "+ z[1] + ".";
	//console.log(a);
	//console.log(b);
	return a;
}

var numero5=descricao(usuarios);
var exercicio5 = document.createElement("p");
exercicio5.innerHTML = numero5;
var exercicio5Parent = document.getElementById("N5");
exercicio5Parent.appendChild(exercicio5);

/*      end of number 5      */