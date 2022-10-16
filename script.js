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

async function checkChosenOption(option, value) {
    switch(option) {
        case 'dolar':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            const { high } = cotacao.USDBRL
            res = high * value
            showResult.textContent = ' ' + res.toFixed(2)
        break;
        case 'euro':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
            high = cotacao.EURBRL
            res = high * value
            showResult.textContent = ' ' + res.toFixed(2)
        break;
    }
}

async function fetchApi(URL) {
   let response = await fetch(URL)
   let responseJson = await response.json()

   return responseJson
}

