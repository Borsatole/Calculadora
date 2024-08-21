div_simulacao_cartao = document.getElementById("div_simulacao_cartao");
div_links = document.getElementById("div_links");

btn_simulacao = document.getElementById("btn_simulacao");
btn_links_aplicativos = document.getElementById("btn_links_aplicativos");


div_simulacao_cartao.style.display = "";
            div_links.style.display = "none";

btn_simulacao.addEventListener("click", function() {
        div_simulacao_cartao.style.display = "";
        if (div_simulacao_cartao.style.display = "") {

            

        } else {
            div_simulacao_cartao.style.display = "";
            div_links.style.display = "none";
        }
  });


  btn_links_aplicativos.addEventListener("click", function() {

    div_simulacao_cartao.style.display = "none"
    div_links.style.display = "";
    
  });
