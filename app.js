var valor = document.querySelector("#search");
var btn_simular = document.querySelector("#btn_simular");
var btn_whatsapp = document.querySelector("#botao_enviar");
var parcelas = document.querySelector("#parcelas");
var tabela = document.querySelector("table");

// Mapeamento de taxas de parcelamento
var taxasParcelamento = {
    2: 4.59,
    3: 5.97,
    4: 7.33,
    5: 8.66,
    6: 9.96,
    7: 11.24,
    8: 12.50,
    9: 13.73,
    10: 14.93,
    11: 16.12,
    12: 17.28
};

// ACIONA AÇÕES DO BOTÃO "SIMULAR"
btn_simular.addEventListener('click', (event) => {

    if (valor.value == "" || isNaN(valor.value)) {
        Toastify({
            text: "Digite um valor válido!!",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#960000",
            },
            onClick: function(){} // Callback after click
          }).showToast();

    } else {
        event.preventDefault();
        pegarValor();
        tirarblur();
    }

    
    
});

// PEGA VALOR DIGITADO NO INPUT
function pegarValor() {
    printar(Math.ceil(parseFloat(valor.value))); // Converte o valor para número e arredonda para cima
}

//TIRAR O BLUR 
function tirarblur() {
    tabela.style.filter = "blur(0px)";
}

// PRINTAR NA TELA
var mensagem = `*SIMULAÇÃO NO CARTÃO DE CRÉDITO*`
function printar(valor) {

    var total_parcelas = 13;
    var taxaRecebimento = 4.98 / 100; // Taxa de 4,98%

    parcelas.innerHTML = "";
    
    for (let i = 1; i < total_parcelas; i++) {
        let acrescimo = 1.30;
        let taxaParcelamento = taxasParcelamento[i] ? taxasParcelamento[i] / 100 : 0;
        let valorComTaxas = valor + (valor * taxaRecebimento) + (valor * taxaParcelamento) + acrescimo;
        let valorParcela = valorComTaxas / i;

        // Arredondar para o próximo número inteiro
        valorComTaxas = Math.ceil(valorComTaxas);
        valorParcela = Math.ceil(valorParcela);

        parcelas.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">CREDITO ${i}X</th>
        <td class="px-6 py-4">R$${valorParcela}</td>
        <td class="px-6 py-4">R$${valorComTaxas}</td>
        </tr>`;

        mensagem += `
✅${i}X R$${valorParcela.toFixed(2).replace(".",",")}`
}

    // console.log(mensagem);

    
}

btn_whatsapp.addEventListener("click", ()=>{

    if (valor.value == "" || isNaN(valor.value)) {
        Toastify({
            text: "Digite um valor válido!!",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#960000",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
    navigator.clipboard.writeText(mensagem).then(function() {

        Toastify({
            text: "Texto copiado com sucesso!",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#169600",
            },
            onClick: function(){} // Callback after click
          }).showToast();

    // console.log('Texto copiado com sucesso!');
        // Aqui você pode adicionar algum feedback ao usuário, como uma mensagem de sucesso.
    }).catch(function(error) {
        //console.error('Erro ao copiar o texto: ', error);
        // Aqui você pode adicionar algum feedback ao usuário, como uma mensagem de erro.
    });}
})