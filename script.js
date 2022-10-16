async function converter() {
    const amount = document.querySelector('[data-amount]').value
    const optionSelected = document.querySelector('[data-option]').value
    const result = document.querySelector('[data-result]')
    let cotacao;
    let res;

    switch(optionSelected) {
        case 'dolar':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            res = cotacao.USDBRL.high * amount
            result.textContent = ' ' + res.toFixed(2)
        break;
        case 'euro':
            cotacao = await fetchApi('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
            res = cotacao.EURBRL.high * amount
            result.textContent = ' ' + res.toFixed(2)
            break;
    }
}

async function fetchApi(req) {
   let res = await fetch(req)
   let resJson = await res.json()

   return resJson
}

