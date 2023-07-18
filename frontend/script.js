function ler(){
    divJsonInfo = document.getElementById("json-info");

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        var obj = [];
        obj = JSON.parse( this.responseText );
        obj.forEach( dado => {
            if (document.getElementById("p" + dado.id_receita) == null){

                // Cria um elemento de parágrafo para cada produto
                const paragraph = document.createElement("p");
                paragraph.id = "p" + dado.id_receita;
                paragraph.innerHTML = `id_receita ${dado.id_receita} - nome_receitas ${dado.nome_receitas} - modo_preparo ${dado.modo_preparo} - fk_categoria ${dado.fk_categoria}`;
          
                // Adiciona o elemento de parágrafo à div de produtos
                divJsonInfo.appendChild(paragraph);
          
                // Cria um botão de exclusão para cada produto
                const button = document.createElement("button");
                button.innerHTML = "Excluir";
                button.addEventListener("click", function() {
                    excluir(dado.id_receita);
                });
          
                // Adiciona o botão à div de produtos
                divJsonInfo.appendChild(button);        
            }
        });

    if (this.readyState == 4 && this.status != 200) {
        divJsonInfo.innerHTML = this.responseText;
      }
    };
      xhttp.open("GET", "http://localhost:8001/receitas", true);
      xhttp.send();
    }