const convertButton = document.querySelector(".convert-button") // mapeando o botao de converter
const currencyToConvert = document.querySelector("currency-to-convert")// mapeando de qual moeda sera convertida
const currencySelect = document.querySelector(".currency-select") // mapeando para qual das moedas sera convertida


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // buscando o valor digitado para converter
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") // valor a ser exibido da primeira moeda
    const currencyValuetoConverted = document.querySelector(".currency-value") // valor a ser exibido da conversao

   
    
    const dolarToday = 5.2
    const euroToday = 6.0
    const libraToday = 5.0

   

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
if(currencySelect.value == "libra"){ // Se o Select estiver selecionado o valor de libra, entre aqui.
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency", currency :"GBP"
    }). format(inputCurrencyValue / libraToday)
}

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", currency :"BRL"
    }). format(inputCurrencyValue)
 
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencyToConvert.value =="dolar") { // se dolar selecionado na conversao 
        currencyName.innerHTML ="Dólar americano"// mude o nome para dolar americano
        currencyImage.src = "./imgs/USA.png"//mude a imagem para dolar
    }

     if(currencySelect.value =="dolar") { // se dolar selecionado na conversao 
        currencyName.innerHTML ="Dólar americano"// mude o nome para dolar americano
        currencyImage.src = "./imgs/USA.png"//mude a imagem para dolar
    }
    
    if(currencySelect.value =="euro") {
        currencyName.innerHTML ="Euro"
        currencyImage.src="./imgs/euro.png"

    }
    if(currencySelect.value =="libra") {
        currencyName.innerHTML ="Libra"
        currencyImage.src="./imgs/libra.png"

    }
    
  convertValues()  




}



currencyToConvert.addEventListener("change",changeCurrency)     

currencySelect.addEventListener("change", changeCurrency)// observe a açao do currencySelect- moeda selecionada e efetue as funçoes do changecurrency

convertButton.addEventListener("click", convertValues)// observe a açao do convertButton-botao de converter e efetue o calculo da funçao convertValues