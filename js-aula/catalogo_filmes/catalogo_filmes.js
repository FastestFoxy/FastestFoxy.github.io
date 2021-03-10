$(function(){
    let url="https://rafaelescalfoni.github.io/desenv_web/filmes.json";
    $.get(url, function(data){

        $.each(data, function(index, item){
            let genra="- ";

            $.each(item.generos, function(index, genero){
                genra+=genero+" - ";
            });

            let same=" ";
            $.each(item.titulosSemelhantes, function(index, semelhantes){

                $.each(data, function(index, semelho){
                    if(semelhantes==semelho.id){
                        same+=" >"+semelho.titulo+"< ";
                    }
                })
            });

            let actors="- ";
            $.each(item.elenco, function(index, elenc){
                actors+=elenc+" - ";
            });

            let ratings;
            let desc;
            $.each(item.opinioes, function(index, op){
                ratings=op.rating;
                desc=op.descricao;

            });
            let src;
            switch(ratings){
                case 0: src="score0.png";
                        break;
                case 1: src="score1.png";
                        break;
                case 2: src="score2.png"
                        break;
                case 3: src="score3.png"
                        break;
                case 4: src="score4.png"
                        break;
                case 5: src="score5.png"
                        break;
            };

            let clr, BGclr;
            if(item.classificacao>=0&&item.classificacao<=14){ clr="green"; BGclr="palegreen"}
            if(item.classificacao>14&&item.classificacao<18){ clr="yellow"; BGclr="orange"}
            if(item.classificacao>=18){ clr="red"; BGclr="black"}
        
            console.log(item.classificacao);

            $("body")  
                    .append($("<div>")
                        .attr("id", "big_div")
                        .append($("<div>")
                            .attr("id", "imageEnameErating")
                            .attr("class", "row d-flex")
                            
                            .append($("<div>")
                                .attr("id", "image_div")

                                .append($("<img>")
                                    .attr("src", item.figura)
                                )
                            )

                            .append($("<div>")
                                .attr("id", "name_div")
                                .html("<h5>"+item.titulo+"</h5>")
                            )

                            .append($("<div>")
                                .attr("id", "ratin_div")
                                .css("background-color", BGclr)
                                .css("color", clr)
                                .text(item.classificacao)
                            )
                        )

                        .append($("<div>")
                            .attr("id", "resumeEelencoEgeneroEsemelhante")
                            .attr("class", "row d-flex")

                            .append($("<div>")
                                .attr("id", "resume_div")
                                .text(item.resumo)
                            )

                            .append($("<div>")
                                .attr("id", "elenco_div")
                                .text("Elenco: "+actors)
                            )

                            .append($("<div>")
                                .attr("id", "semelhante_div")
                                .text("Títulos semelhantes: "+same)
                            )

                            .append($("<div>")
                                .attr("id", "genero_div")
                                .text("Gêneros: "+genra)
                            )
                        )

                        .append($("<div>")
                            .attr("id", "starsEcoments")
                            .attr("class", "row d-flex")

                            .append($("<div>")
                                .attr("id", "stars_div")
                                .append($("<img>")
                                    .attr("src", src)
                                )
                            )

                            .append($("<div>")
                                .attr("id", "coments_div")
                                .text(desc)
                            )
                        )
                    )
        })
    })
})