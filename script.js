const resultDiv = document.getElementById('result');

const btnF = document.getElementById('btnF');
btnF.style.display = "none";

const btnC = document.getElementById('btnC');

const onChangeSelect = () => {
    let tempSelect = document.getElementById('selectTemp').value

    //console.log(tempSelect === 'celsius')
    if(tempSelect === 'celsius') {
        btnC.style.display = "inline";
        btnF.style.display = "none";
    } else if(tempSelect === 'fahrenheit')  {
        btnF.style.display = "inline";
        btnC.style.display = "none";
    }
}

const toCelsius = () => {
    const celsius = (inputTemp.value - 32) * 5 / 9;
    displayResult(celsius);
};

const toFarenheit = () => {
    
    //const temp = document.getElementById('inputCelsius').value;
    const farenheit = 1.8 * inputTemp.value + 32;
    displayResult(farenheit);
};

const displayResult = (temp) => {
    //let result = celsius.toFixed(2)
    let result = temp
    let tempSelect = document.getElementById('selectTemp').value
    console.log(tempSelect)

    let message = '';

    if(tempSelect === 'celsius') {
        if (result < 22) {
            message = `Tá bem fresquim! Só ${formatPtBf(result)} °C`;
        } else if (result >= 22 && result <= 28) {
            message = `Tá um sereno só o mi! ${formatPtBf(result)} °C`;
        } else if (result > 30 && result <= 33) {
            message = `Tá queimando o quengo! ${formatPtBf(result)} °C`;
        } else if (result > 33) {
            message = `Tá pegando fogo! ${formatPtBf(result)} °C`;
        }
    } else {
        message = `A temperatura é ${formatPtBf(result)} F`;
    }
    

    resultDiv.innerHTML = `<p>${message}</p>`;
};

const formatPtBf = number => number.toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2});

const limpar = () => {
    inputTemp.value = ''
    resultDiv.innerHTML = ''
};