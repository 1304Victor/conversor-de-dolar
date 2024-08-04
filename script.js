const convertBotton = document.querySelector(".convert-botton")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.8
    const bitcoinToday = 357.122

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(currencySelect.value)

    
    
    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-en", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/estados-unidos.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertBotton.addEventListener("click", convertValues)