const showResult = document.querySelector('[data-result]')
const optionSelected = document.querySelector('[data-option]')

let cotacao;
let res;

function converter() {
    const amount = document.querySelector('[data-amount]').value

    if(amount != '') {
        checkChosenOption(optionSelected.value, amount)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira um valor para converter'
          })
    }
}

async function checkChosenOption(option, value) {
    switch(option) {
        case 'dolar':
            cotacao = await fetchApi('BRL-USD')
            res = cotacao.BRLUSD.high * value
            showResult.textContent = 'Valor em dólar US$ ' + res.toFixed(2)
        break;
        case 'euro':
            cotacao = await fetchApi('BRL-EUR')
            res = cotacao.BRLEUR.high * value
            showResult.textContent = 'Valor em euro €' + res.toFixed(2)
        break;
    }
}

async function fetchApi(currentQuote) {
   let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currentQuote}`)
   let responseJson = await response.json()

   return responseJson
}

