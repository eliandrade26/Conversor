const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") // valor real
    const currencyValuetoConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)
    
    const dolarToday = 5.2
    const euroToday = 6.0

   

if(currencySelect.value == "dolar"){ // Se o Select estiver selecionado o valor de dolar, entre aqui.
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency", currency :"USD"
    }).format(inputCurrencyValue / dolarToday)
}


if(currencySelect.value == "euro"){ // Se o Select estiver selecionado o valor de euro, entre aqui.
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency", currency :"EUR"
    }). format(inputCurrencyValue / euroToday)
}


    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", currency :"BRL"
    }). format(inputCurrencyValue)
 
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")




    if(currencySelect.value =="dolar") {
        currencyName.innerHTML ="Dólar americano"
        currencyImage.src = "./imgs/USA.png"
    }
    
    if(currencySelect.value =="euro") {
        currencyName.innerHTML ="Euro"
        currencyImage.src="./imgs/euro.png"

    }
    
  convertValues()  




}



     
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)