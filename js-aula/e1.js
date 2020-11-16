function n1(){
	var a=document.getElementById("A").value;
	var b=document.getElementById("AA").value;
	a=parseInt(a);
	b=parseInt(b);
	alert(a +"+"+ b +"="+ (a+b));

}

function n2(){
	var a=document.getElementById("AAA").value;
	var b=document.getElementById("AAAA").value;
	a=parseInt(a);
	b=parseInt(b);
	if(a<b) alert(a + " é menor que " + b);
	else if(a>b) alert(a +" é maior que "+ b);
		else alert(a + " é igual a " + b);
}

function n3(){
	var a=document.getElementById("AAAAA").value;
	var b=document.getElementById("AAAAAA").value;
	a=parseInt(a);
	b=parseInt(b);
	for(var x=0;x<=a;x++){
		if((a%x)==0)var y++;
	}
	alert(y);
}