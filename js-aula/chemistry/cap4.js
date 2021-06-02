$(function(){
    $("#d1 button").click(function(){
        let m=$("#d1 input[name=input1]").val();
        let V=$("#d1 input[name=input2]").val();
        let resposta="";
        let resultado="";
        let saturação="";
        if((m/V)<340){ resposta="<b>Esta solução é insaturada.</b>"; resultado="menor que"; saturação="insaturada"}
        else if((m/V)==340){ resposta="<b>Esta solução é saturada.</b>"; resultado="igual a"; saturação="saturada"}
        else if((m/V)>340){ resposta="<b>Esta solução é saturada com corpo de fundo.</b>"; resultado="maior que"; saturação="saturada com corpo de fundo"}

        resposta+="<br><br>Sabemos isso, pois o coeficiente de solubilidade de KCl à 20°C é 34g/100mL de água, isto é, 340g/L.";
        resposta+="<br>Ao sabermos isso podemos constatar que "+ (m/V) + "g/L ("+m+"/"+V+") é "+resultado+" 340g/L, portanto a solução final é "+saturação;
        
        $("#d1 p").html(resposta);
    });

    
    $("#d2 button").click(function(){
        let mol=$("#d2 input[name=input1]").val();
        let V=$("#d2 input[name=input2]").val();
        let resposta="";
        
        if(((mol/V)*74)>340){ 
            resposta="<b>Esta solução possui corpo de fundo.</b>";
            resposta+="<br><br>Sabemos isso, pois o coeficiente de solubilidade de KCl à 20°C é 34g/100mL de água, isto é, 340g/L.";
            resposta+="<br>Então se o valor do número de mol de KCl ("+mol+"mol) dividido pelo volume da solução ("+V+"L), que é "+mol/V+" mol/L, multiplicado pela massa molecular da solução (74g/mol), for maior que o coeficiente de solubilidade da solução, o que é visto que "+((mol/V)*74)+"g/L é maior que 340 g/L, então a solução final terá corpo de fundo, pois a quantidade de matéria supera o máximo possível da solução.";
        }
        else{
            resposta="A concentração molar é "+mol/V+"mol/L, pois é "+mol+"/"+V+".";
        }
        
        $("#d2 p").html(resposta);
    });
});