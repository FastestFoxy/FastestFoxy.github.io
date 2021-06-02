;

// Para inserir no html, coloque esta tag no head <script src="cap5.js"></script>

$(function(){

    $("body")
        .append($("<h2>")
            .text("Propriedades Coligativas")
        )

        .append($("<br>")
        )

        .append($("<p>")
            .text("Todo líquido puro apresenta determinadas propriedades, como pressãode vapor, ponto de ebulição, ponto de solidificação e pressão osmótica (capacidade de atravessar uma membrana porosa). No entanto, quando um soluto não volátil (KCl por exemplo) é dissolvido nesse líquido as propriedades se modificam e isso chamamos de Propriedades Coligativas")
        )

        .append($("<p>")
            .append($("<b>")
                .text("Propriedades Coligativas são as propriedades do solvente que se modificam na presença de um soluto não volátil.")
            )
        )
        .append($("<p>")
            .text("Deve ser observado que nas explicações que abrangeremos a seguir serão todas relativas ao comportamento de Soluções Ideias, isto é ")
            .append($("<b>")
                    .text("soluções diluidas de solutos não voláteis, nas quais não ocorre variação de volume nem troca de calor durante a disslução do soluto no solvente e cujas intereções soluto-solvente são consideradas iguais às interações soluto-soluto e solvente-solvente.")
            )
        )
        .append($("<p>")
            .text("Nestas, soluções ideais, as propriedades coligativas dependem apenas do número de partículas de soluto na solução, sendo assim, as propriedades coligativas da água são iguais independentemente de qual o soluto dissolvido nela desde que suas quantidades sejam iguais, por exemplo, 1 mol de KCl/kg de água ou 1 mol de NaCl/kg de água dissolvidos em frascos diferentes proporcionam as mesmas mudança nas propriedades coligativas da solução (para 100% de dissolução de todos os sais).")
        )

        .append($("<p>")
            .text("Outra coisa que temos que levar em consideração é se o soluto libera ions no solvente, nestes casos as particulas dissolvidas são mais, então os efeitos coligativos serão mais intensos. Mas vamos ao conteúdo.")
        )

        .append($("<br>")
        )


        // -------------------------Tonoscopia-------------------------

        .append($("<br>")
        )

        .append($("<h3>")
            .text("Tonoscopia")
        )

        .append($("<br>")
        )

        .append($("<p>")
            .text("Todo o líquido está sujeito a evaporação, e em um sistema fechado a temperatura do ambiente influencia o liquido a evaporar. Visto isso quanto maior a temperatura ambiente mais evaporação do líquido, até o sistema chagar num grau de saturação do vapor em que uma molécula do líquido passa do estado liquido para vapor simultaneamente com outra que passa de vapor para líquida, e sabendo isto podemos definir a pressão máxima de vapor.")
        )
        
        .append($("<p>")
            .append($("<b>")
                .text("A pressão máxima de vapor de substância é a maior pressão que seus vapores exercem em determinada temperatura.")
            )
        )

        .append($("<p>")
            .append($("<i>")
            .text("Com a alteração da pressão do ambiente é possivel modificar as propriedades do líquido.")
            )
        )


        .append($("<p>")
            .text("Adicionalmente quando há a adição de algum soluto não volátil, percebemos que a sua pressão máxima de vapor diminue em constraste com o solvente puro à mesma temperatura, a isso chamamos Tonoscopia.")
        )
        
        .append($("<p>")
            .append($("<b>")
                .text("Tonoscopia é uma propriedade coligativa que estuda o abaixamento da pressão máxima de vapor de um solvente ao ser adicionado um soluto não volátil a ele.")
            )
        )

        .append($("<br>")
        )


        // -------------------------Ebulioscopia-------------------------

        .append($("<br>")
        )

        .append($("<h3>")
            .text("Ebulioscopia")
        )

        .append($("<br>")
        )

        .append($("<p>")
            .text("Se temos dois frascos abertos com um líquido, como água, e em um deles dissolvermos um soluto não volátil (KCl, por exemplo) e aquecermos ambos de forma costante e uniforme, perceberemos que o frasco com a solução de solvente-soluto entrará em ebulição, isto é irá ferver, mais tarde que o frasco de solvente puro. Isto porque a temperatura de ebulição da solução é maior que o do que do solvente. E isso chamamos de ebulioscopia, isto é: ")
        )
        
        .append($("<p>")
            .append($("<b>")
                .text("Ebulioscopia é uma propriedade coligativa que estuda o aumento do ponto de ebulição do solvente causado pela adição de um soluto não volátil a ele.")
            )
        )

        .append($("<br>")
        )


        // -------------------------Crioscopia-------------------------

        .append($("<br>")
        )

        .append($("<h3>")
            .text("Crioscopia")
        )

        .append($("<br>")
        )

        .append($("<p>")
            .text("O mesmo experimento anterior pode ser feito novamente para a crioscopia, só que neste caso diminuiremos a temperatura ao invéz de aumentá-la. Perceberemos que o frasco com a solução também demorará a congelar mais que o solvente puro, isto porque a temperatura de solidificação (quando um líquido congela) da solução é menor que do solvente sozinho. Nisso estudamos a Crioscopia, isto é: ")
        )
        
        .append($("<p>")
            .append($("<b>")
                .text("Crioscopia é uma propriedade coligativa que estuda o abaixamento do ponto de solidificação de um solvente ao ser adicionado um soluto não volátil a ele.")
            )
        )

        .append($("<br>")
        )


        // -------------------------Osmoscopia-------------------------

        .append($("<br>")
        )

        .append($("<h3>")
            .text("Osmoscopia")
        )

        .append($("<br>")
        )

        .append($("<p>")
            .text("Dentro de um frasco, se tivermos dois líquido (sendo ambos derivados do mesmo solvente e com o mesmo soluto, ou um com nenhum soluto) separados por uma membrana semipermeável, que permite a passagem de algumas substância e não de outras, os líquidos se direcionaram do líquido menos concentrado para o mais concentrado até que o soloto fique uniformemente distribuído. E isso chamamos de osmoscopia, isto é: ")
        )
        
        .append($("<p>")
            .append($("<b>")
                .text("Osmoscopia é uma propriedade coligativa que estuda a passagem espontânea de solvente entre duas soluções de concentrações diferentes, sendo uma delas mais concentrada que a outra, atravéz de membranas semipermeáveis.")
            )
        )
});









