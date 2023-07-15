// INTEGRAÇÃO COM O FRONT DO TRABALHO
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
        // divJsonInfo.innerHTML = "";

    if (this.readyState == 4 && this.status != 200) {
        divJsonInfo.innerHTML = this.responseText;
      }
    };
      xhttp.open("GET", "http://localhost:8001/receitas_categoria/1", true);
      xhttp.send();
    }

// function ler(){
//      divJsonInfo = document.getElementById("json-info");
//      divStatus.innerHTML = "carregando...";
//      tabela = document.getElementById("receitas");
    
//          xhttp = new XMLHttpRequest();
    
//          xhttp.onreadystatechange = function(){
//              if( this.readyState == 4 && this.status == 200){
//                  obj = JSON.parse( this.responseText );
//                  obj.forEach( dado => {
//                      if( document.getElementById("p" + dado.id_receita ) == null ){
//                          index = tabela.rows.length
//                          row = tabela.insertRow(-1);
//                          row.id_receita = "p" + dado.id_receita;
//                          cellID = row.insertCell(0);
//                          cellNOME = row.insertCell(1);
//                          cellPREPARO = row.insertCell(2);
//                          cellFK_CATEGORIA = row.insertCell(3);
//                          cellID.innerHTML = dado.id_receita;
//                          cellNOME.innerHTML = dado.nome_receitas;
//                          cellPREPARO.innerHTML = dado.modo_preparo;
//                          cellFK_CATEGORIA.innerHTML = dado.fk_categoria;
//                      }
//                  });
//                  divJsonInfo.innerHTML = "";
//              }
    
//              if( this.readyState == 4 && this.status != 200){
//                  divJsonInfo.innerHTML = this.responseText;
//              }
    
//          };
    
    
//          xhttp.open("GET" , "http://localhost:8001/receitas", true);
//          xhttp.send();
//      }

function lertudo() {
    const tipoReceita = document.querySelector('input[name="tipo"]:checked').value;
  
    divJsonInfo = document.getElementById("json-info");
    divJsonInfo.innerHTML = ""; // Limpa as receitas anteriores
  
    xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var obj = JSON.parse(this.responseText);
          obj.forEach((dado) => {
            // Cria um elemento de parágrafo para cada receita
            const paragraph = document.createElement("p");
            paragraph.id = "p" + dado.id_receita;
            paragraph.innerHTML = `id_receita ${dado.id_receita} - nome_receitas ${dado.nome_receitas} - modo_preparo ${dado.modo_preparo} - fk_categoria ${dado.fk_categoria}`;
  
            // Adiciona o elemento de parágrafo à div de receitas
            divJsonInfo.appendChild(paragraph);
  
            // Cria um botão de exclusão para cada receita
            const button = document.createElement("button");
            button.innerHTML = "Excluir";
            button.addEventListener("click", function() {
              excluir(dado.id_receita);
            });
  
            // Adiciona o botão à div de receitas
            divJsonInfo.appendChild(button);
          });
        } else {
          divJsonInfo.innerHTML = "Erro ao obter as receitas.";
        }
      }
    };
  
    xhttp.open("GET", `http://localhost:8001/receitas_categoria/${tipoReceita}`, true);
    xhttp.send();
  }
  