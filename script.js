const showResult = document.querySelector('[data-result]')
const optionSelected = document.querySelector('[data-option]').value

let cotacao;
let res;

function converter() {
    const amount = document.querySelector('[data-amount]').value

    if(amount != '') {
        checkChosenOption(optionSelected, amount)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira um valor para converter'
          })
    }
}

async function checkChosenOption(opcao, valor) {
    switch(opcao) {
        case 'dolar':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            const { high } = cotacao.USDBRL
            res = high * valor
            showResult.textContent = ' ' + res.toFixed(2)
        break;
        case 'euro':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
            high = cotacao.EURBRL
            res = high * valor
            showResult.textContent = ' ' + res.toFixed(2)
        break;
    }
}

async function fetchApi(req) {
   let res = await fetch(req)
   let resJson = await res.json()

   return resJson
}

