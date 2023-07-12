// INTEGRAÇÃO COM O FRONT DO TRABALHO
function ler(){
    tabela = document.getElementById("receitas");

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        obj = JSON.parse( this.responseText );
    }
}