const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor real
    const currencyvaluetoconverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2



    const convertedValue = inputCurrencyValue / dolarToday

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", currency :"BRL"
    }). format(inputCurrencyValue)
    
    
    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency", currency :"USD"
    }).format(convertedValue)


    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)