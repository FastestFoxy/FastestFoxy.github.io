$(function(){
    $("#d1 button").click(function(){
        let frase= $("#d1 p").text();

        let tamanho= frase.length;
        let vetor="";
        let b=0;
        for(let a=tamanho-1; a>=0;a--){
            vetor+=frase[a];
            // console.log(a+" - "+b);
            
            b++;
        };
        
        $("#d1 p").text(vetor);
    });

    $("#d2 button").click(function(){
        let tamanho= $("#d2 p").text().length;
        let htmlFRASE= $("#d2 p").html();
        let frase="";
        // console.log(htmlFRASE);
        // console.log(tamanho);
        
        
        for(let a=0; a<tamanho;a++){

            if(testeVogal(htmlFRASE[a])){
                frase+="<b>"+htmlFRASE[a]+"</b>";
            } 
            else frase+=htmlFRASE[a];
            
        };
        
        $("#d2 p").html(frase);

        function testeVogal (letra){
            letra=letra.toUpperCase();
            switch(letra){
                case "A": return true;
                            break;
                case "E": return true;
                            break;
                case "I": return true;
                            break;
                case "O": return true;
                            break;
                case "U": return true;
                            break;
                default: return false;
            }
        }
    });


    $("#d3 button").click(function(){
        let texto= $("#d3 p").text();
        let tamanho= texto.length;


        let vetor=[], newarray=[];
        let valorVetor=0, inicioDeCorte=0, newarrayIndex=0;

        for(let a=0; a<tamanho; a++){
            if(texto[a]==` `){
                if(texto[inicioDeCorte]!=` `) 
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a);
                else if (texto[inicioDeCorte]!=` `&&(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`))
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a-1);
                else if(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`)
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a-1);
                else 
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a);
                
                valorVetor++;
                inicioDeCorte=a;
            }
        }
        for(let a=0;a<vetor.length; a++){
            let palavra=vetor[a];
            let vetorAValor=palavra.toUpperCase();
            let ocorrecia=0;
            let novocoiso;

            for(let b=0; b<vetor.length; b++){
                vetorBValor=vetor[b].toUpperCase();
                if(vetorAValor==vetorBValor){
                    ocorrecia++;
                    if(vetorAValor==vetorBValor&&ocorrecia!=1) vetor.splice(b, 1);
                }
            }
            novocoiso= new objTabela(palavra, ocorrecia);
            newarray[newarrayIndex]=novocoiso;
            newarrayIndex++;
        }
        for(let a=0;a<newarray.length; a++){
            $("#d3 table")
                .append($("<tr>")
                    .append($("<td>")
                        .text(newarray[a].palavra)
                    )
                    .append($("<td>")
                        .text(newarray[a].ocorrecia)
                    )
                )        
        }




        function objTabela (word, number){
            this.palavra= word;
            this.ocorrecia= number;
        }
    });

    $("#d4 button").click(function(){
        let texto= $("#d4 p").text();
        let tamanho= texto.length;


        let vetor=[], newarray=[];
        let valorVetor=0, inicioDeCorte=0, newarrayIndex=0;

        for(let a=0; a<tamanho; a++){
            if(texto[a]==` `){
                if(texto[inicioDeCorte]!=` `) 
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a);
                else if (texto[inicioDeCorte]!=` `&&(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`))
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a-1);
                else if(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`)
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a-1);
                else 
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a);
                
                valorVetor++;
                inicioDeCorte=a;
            }
        }
        for(let a=0;a<vetor.length; a++){
            let palavra=vetor[a];
            let vetorAValor=palavra.toUpperCase();
            let ocorrecia=0;
            let novocoiso;

            for(let b=0; b<vetor.length; b++){
                vetorBValor=vetor[b].toUpperCase();
                if(vetorAValor==vetorBValor){
                    ocorrecia++;
                    if(vetorAValor==vetorBValor&&ocorrecia!=1) vetor.splice(b, 1);
                }
            }
            novocoiso= new objTabela(palavra, ocorrecia);
            newarray[newarrayIndex]=novocoiso;
            newarrayIndex++;
        }

        // console.log(newarray);

        function objTabela (word, number){
            this.palavra= word;
            this.ocorrecia= number;
        }

        let maisFrequente= 0, maisFrequenteI=0;
        let maisFrequenteF= "A(s) mais frequente(s) são(é): ";
        let maisFrequentes= [];

        for(let a=0;a<newarray.length; a++){
            if(newarray[a].ocorrecia>=maisFrequente){
                maisFrequente=newarray[a].ocorrecia;
            }
        }
        for(let a=0;a<newarray.length; a++){
            if(newarray[a].ocorrecia>=maisFrequente){
                maisFrequentes[maisFrequenteI]=newarray[a].palavra;
                maisFrequenteI++;
            }
        }

        if(maisFrequentes.length<=1) maisFrequenteF=maisFrequentes[0];
        else{
            for(let a=0;a<maisFrequentes.length; a++){
                maisFrequenteF+=maisFrequentes[a]+", ";
            }
            maisFrequenteF+="com "+maisFrequente;
        }


        $(".p").text(maisFrequenteF);

        maisFrequente=0; valorVetor=0; inicioDeCorte=0; newarrayIndex=0; maisFrequenteI=0;
    });

    $("#d5 button").click(function(){
        let texto= $("#d5 p").text();

        let procurar=$("#input1_5").val();
        let substituir=$("#input2_5").val();

        let newtexto= texto.split(procurar).join(substituir);
        
        $("#d5 p").text(newtexto);
    });

    $("#d6 button").click(function(){
        let dia= $("#d6 input[name=dia]").val();
        let mes= $("#d6 input[name=mes]").val();
        let ano= $("#d6 input[name=ano]").val();
        let data= new Date();

        let birthday = new Date(ano, mes-1, dia);
        let test=data.getTime()-birthday.getTime();

        let diasdevida=parseInt(test/86400000);
        let texto="A pessoa tem "+diasdevida+" dias de vida, aproximadamente";
        
        $("#d6").append($("<p>").text(texto));
    });

    $("#d7 button").click(function(){
        let dia= $("#d7 input[name=dia]").val();
        let mes= $("#d7 input[name=mes]").val();
        let ano= $("#d7 input[name=ano]").val();

        switch(mes){
            case "1": mes="janeiro";
                break;
            case "2": mes="fevereiro";
                break;
            case "3": mes="março";
                break;
            case "4": mes="abril";
                break;
            case "5": mes="maio";
                break;
            case "6": mes="junho";
                break;
            case "7": mes="julho";
                break;
            case "8": mes="agosto";
                break;
            case "9": mes="setembro";
                break;
            case "10": mes="outubro";
                break;
            case "11": mes="novembro";
                break;
            case "12": mes="dezembro";
                break;
        }
        let texto=dia+" de "+mes+" de "+ano;
        $("#d7").append($("<p>").text(texto));
    });

    $("#d8 button").click(function(){
        let dia= $("#d8 input[name=dia1]").val();
        let mes= $("#d8 input[name=mes1]").val();
        let ano= $("#d8 input[name=ano1]").val();
        let diaF= $("#d8 input[name=dia2]").val();
        let mesF= $("#d8 input[name=mes2]").val();
        let anoF= $("#d8 input[name=ano2]").val();

        let dataF= new Date(anoF, mesF, diaF);
        let dataI= new Date(ano, mes, dia);
        let distaciaML= dataF.getTime()-dataI.getTime();

        let distaciaS=parseInt(distaciaML/604800000);
        
        let texto= "Há "+distaciaS+" semanas entres essas datas";
        
        $("#d8").append($("<p>").text(texto));
    });

    $("#d9 input").on('input', function(){
        let password= $("#d9 input").val();
        let tamanho=password.length;

        for(let a=0; a<tamanho; a++){
            if(/^[a-zA-Z]+$/.test(password)) $("#d9 p").text("Fraca").css("color", "red");
            else if((/^[a-zA-Z]+$/.test(password))||(/^[a-zA-Z0-9]+$/.test(password))) $("#d9 p").text("Moderada").css("color", "orange");
            else if((/^[a-zA-Z]+$/.test(password))||(/^[a-zA-Z0-9]+$/.test(password))||(/^[a-zA-Z0-9#-&(-.=]+$/.test(password))) $("#d9 p").text("Forte").css("color", "green");
            else $("#d9 p").text("Invalida").css("color", "black");
        
        }
        console.log((/^[a-zA-Z]+$/.test(password))||(/^[0-9]+$/.test(password))||(/^[a-zA-Z0-9#-&(-.=]+$/.test(password)));

    });
        
        
})