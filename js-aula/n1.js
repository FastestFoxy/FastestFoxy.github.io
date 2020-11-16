//alert("ALERTA!! A tecla >ENTER< não funciona para inicio de todos os processos dos exercícios, favor usar o botão [Executar]")
function n1(){
	var a=document.getElementById("A").value;
	var b=document.getElementById("A2").value;
	a=parseInt(a);
	b=parseInt(b);
	alert(a +"+"+ b +"="+ (a+b));

}

function n2(){
	var a=document.getElementById("A3").value;
	var b=document.getElementById("A4").value;
	a=parseInt(a);
	b=parseInt(b);
	if(a<b) alert(a + " é menor que " + b);
	else if(a>b) alert(a +" é maior que "+ b);
		else alert(a + " é igual a " + b);
}

function n3(){
	var a=document.getElementById("A5").value;
	a=parseInt(a);
	var x;var y=0;
	for(x=0;x<=a;x++){
		if((a%x)==0) y++;
	}
	if(y==2) alert(a+" é primo");
	else alert(a+" não é primo");
}

function n4(){
	var a=document.getElementById("A6").value;
	var b=document.getElementById("A7").value;
	a=parseInt(a);
	b=parseInt(b);

	var x=Math.sqrt((a*a)+(b*b));
	alert("A hipotenusa de "+a+" e "+b+" é "+x);
}

function n5(){
	var a=document.getElementById("A8").value;
	var b=document.getElementById("A9").value;
	a=parseFloat(a);
	b=parseFloat(b);

	var x=(a*(b/100));
	a+=x;
	alert("O novo salário é "+a);
}

function n6(){
	var a=document.getElementById("A10").value;
	a=parseFloat(a);

	a+=(a*(28/100)+a*(45/100));
	alert("O custo para o consumidor será de "+a);
}

function n7(){
	var a=document.getElementById("A11").value;
	var b=document.getElementById("A12").value;
	var c=document.getElementById("A13").value;
	var d=document.getElementById("A14").value;

	var a=parseInt(a);
	var b=parseInt(b);
	var c=parseInt(c);
	var d=parseInt(d);

	var x=a+(b*(5/100))+(c*d);
	alert("O salário do funcionário será de "+x);
}

function n8(){
	var a=document.getElementById("A15").value;
	var a=parseInt(a);

	var x=((a-32)/9)*5;
	alert(x);
}

function n9(){
	var a=document.getElementById("A16").value;
	var b=document.getElementById("A17").value;
	var c=document.getElementById("A18").value;

	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);

	var x=((a*2)+(b*3)+(c*5))/10;

	alert("A nota média do aluno é "+x);
}

function n10(){
	var a=document.getElementById("A19").value;
	a=parseInt(a);

	if(a<12) var x=1.30*a;
	else var x=1.00*a;

	alert("O valor total das maçãs será de "+x+" reais");
}