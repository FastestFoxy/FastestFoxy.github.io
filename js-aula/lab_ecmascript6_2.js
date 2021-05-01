;

array=[1,90,12,23,23,8,-1,-2,0,1,2,3,4,4,5,5,6];




Array.prototype.min = function(){
    smallest= Infinity;
    teste=Math.min.apply(smallest, this);
    return teste;
}

/* Para fazer ^ isto ^ utilizei os conhecimento adquiridos em:

Função do Ian de Aquino:
    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };

Função de exemplo em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply :

    function minOfArray(arr) {
        let min = Infinity;
        let QUANTUM = 32768;
    
        for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
        min = Math.min(submin, min);
        }
    
        return min;
    }
*/

Array.prototype.max = function(){
    biggest= Infinity;
    teste=Math.max.apply(biggest, this);
    return teste;
}

Array.prototype.uniq= function(){
    let i=0;
    let novo=[];
    
    for(value of this){
        novo[i]=value;
        i++;
    }
        
    for(let primeiro=0; primeiro<novo.length; primeiro++){
        let a=novo[primeiro];
        
        let conta=0;
        for(let i=0; i<novo.length; i++){
            

            if(a==novo[i]){

                conta+=1;
            
                if(conta>1)novo.splice(i, 1);
            } 
        }

    }

    return novo;
}

Array.prototype.sortNum= function(){
    let novo=[];
    let smallest= Infinity;
    let min=Math.min.apply(smallest, this);
    let biggest= Infinity;
    let max=Math.max.apply(biggest, this);

    for(let value=min; value<=max; value++){

        for(let i=0; i<this.length;i++){

            if(value==this[i]){
                novo.push(value);
            }

        }

    }
    return novo;
}


let fibonacci=(posição)=>{
    let inicio=0;
    let segundo=1;
    
    let array=[];
    for(let i=0;i<posição;i++){
        array[i]=inicio;
        let Itemp=inicio;
        inicio=segundo;
        segundo+=Itemp;
    }
    return array;
}

let double=(vetor)=>{
    let dobro=(vetor)=>{
        return vetor*2;
    }
    return vetor.map(dobro);
}

let evenElements=(vetor)=>{
    let pares=(vetor)=>{
        return vetor%2==0;
    }
    return vetor.filter(pares);
}

let sum=(vetor)=>{
    let soma=(N, outroN)=>{
        return N+outroN;
    }
    return vetor.reduce(soma);
}

$(function(){

    $("#q1")
        .append($("<p>")
            .text(`Dentro do array [${array}]: min: ${array.min()}, max: ${array.max()}, sem valores repetidos: [${array.uniq()}] em ordem crescente: [${array.sortNum()}]`)
        )

    
    $("#q2 button").click(function(){
        $("#q2 p")
            .text(`A posição dada gera a sequência: ${fibonacci($("#q2 input").val())}`)
    })
    
    $("#q3")
        .append($("<h5>")
            .text(`Apartir do array [${array}]: `)
        )
        .append($("<p>")
            .text(`Os dobros dos valores são: ${double(array)}`)
        )
        .append($("<p>")
            .text(`Os pares são: ${evenElements(array)}`)
        )
        .append($("<p>")
            .text(`A soma de todos os valores é: ${sum(array)}`)
        )
});