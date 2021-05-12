
let calculadora= (primerio, segundo, operacao)=>{
    let erro="Valores incorretos.";
    switch(operacao){
        case "+": return primerio+segundo;
                        break;
        case "-": return primerio-segundo;
                        break;
        case "*": return primerio*segundo;
                        break;
        case "/": return primerio/segundo;
                        break;
        default: return erro;
    }
}

let imposto_renda= (salario)=>{
    let aliquota, deducao;
    if(salario < 1903.98){ aliquota=0;deducao=0;}
    else if(1903.98<=salario&&salario<2826.65){ aliquota=7.5/100;deducao=142.80;}
    else if(2826.65<=salario&&salario<3751.05){ aliquota=15.0/100;deducao=354.80;}
    else if(3751.05<=salario&&salario<=4664.68){ aliquota=22.5/100;deducao=636.13;}
    else if(salario>4664.68){ aliquota=27.5/100;deducao=869.36;}

    return salario*aliquota-deducao;
}

let triangulo= (l1, l2, l3)=>{
    let erro="Valores inválidos";
    let m1="Equilátero";
    let m2="Escaleno";
    let m3="Isósceles";
    if(l1<=0||l2<=0||l3<=0) return erro;
    else if(l1+l2<=l3||l3+l2<=l1||l1+l3<=l2) return erro;
    else if(l1==l2&&l2==l3&&l3==l1) return m1;
    else if(l1!=l2&&l2!=l3&&l3!=l1) return m2;
    else if(l1==l2||l2==l3||l3==l1) return m3;
}

let rodagem_frente=(strip, pos)=>{
    
    const alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alphaCopy=[];

    for(let copia=0;copia<26;copia++){alphaCopy[copia]=alphabet[copia]}
    
    for(let x=0;x<pos;x++){
        let last=alphaCopy.pop();
        alphaCopy.unshift(last);
    }

    let copy="";let real="";
    for(let z=0;z<26;z++){
        copy+=alphaCopy[z];
        real+=alphabet[z];
    }
    

    let length=strip.length;
    let new_strip="";

    for(let b=0;b<length;b++){
        let a;
        for(c=0;c<26;c++){
            if(strip[b]==alphabet[c]){
                a=c;
                break;
            }
        }
        let match= alphaCopy[a];
        new_strip+=match;
    }
    
    return new_strip
}

let rodagem_tras=(strip, pos)=>{
    
    const alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alphaCopy=[];

    for(let copia=0;copia<26;copia++){alphaCopy[copia]=alphabet[copia]}
    
    for(let x=0;x<pos;x++){
        let first=alphaCopy.shift();
        alphaCopy.push(first);
    }


    let copy="";let real="";
    for(let z=0;z<26;z++){
        copy+=alphaCopy[z];
        real+=alphabet[z];
    }

    let length=strip.length;
    let new_strip="";

    for(let b=0;b<length;b++){
        let a;
        for(c=0;c<26;c++){
            if(strip[b]==alphabet[c]){
                a=c;
                break;
            }
        }
        let match= alphaCopy[a];
        new_strip+=match;
    }
    
    return new_strip;
}



$(function(){

    $("#q1")
        .append($("<p>")
            .text(`A partir dos valores: 3, 4, +: recebemos o valor ${calculadora(3, 4, "+")}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 25, 4, -: recebemos o valor ${calculadora(25, 4, "-")}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 8, 3, +: recebemos o valor ${calculadora(8, 3, "*")}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 100, 25, /: recebemos o valor ${calculadora(100, 25, "/")}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 3, 4, : (um erro): recebemos a mensagem ${calculadora(3, 4, ":")}.`)
        )

    
    $("#q2 button").click(function(){
        $("#q2 p")
            .text(`O imposto de renda será: ${imposto_renda($("#q2 input").val())}.`)
    })
    
    $("#q3")
        .append($("<p>")
            .text(`A partir dos valores: 3, 4, 5: recebemos a mensagem ${triangulo(3, 4, 5)}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 3, 4, 3: recebemos a mensagem ${triangulo(3, 4, 3)}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 3, 3, 3: recebemos a mensagem ${triangulo(3, 3, 3)}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: 1, 4, 1: recebemos a mensagem ${triangulo(1, 4, 1)}.`)
        )
        
    $("#q4")
        .append($("<p>")
            .text(`A partir dos valores: abc, 2 (rodando para frente) recebemos o conjunto: ${rodagem_frente("abc", 3)}.`)
        )
        .append($("<p>")
            .text(`A partir dos valores: abc, 2 (rodando para trás) recebemos o conjunto: ${rodagem_tras("abc", 3)}.`)
        )
});