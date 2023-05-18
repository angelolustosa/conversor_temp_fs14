const resultDiv = document.getElementById('result');

const divC = document.getElementById('divC');
divC.style.display = "none";

const divF = document.getElementById('divF');


const inputFarenheit = document.getElementById('inputFarenheit').value;
const inputCelsius = document.getElementById('inputCelsius').value;



const onChangeSelect = () => {
    let tempSelect = document.getElementById('selectTemp').value

    //console.log(tempSelect === 'celsius')
    if(tempSelect === 'celsius') {
        divC.style.display = "none";
        divF.style.display = "block";
    } else if(tempSelect === 'fahrenheit')  {
        divF.style.display = "none";
        divC.style.display = "block";
    }
}

const toCelsius = () => {
    const inputFarenheit = document.getElementById('inputFarenheit').value;
    const celsius = (inputFarenheit - 32) * 5 / 9;
    displayResult(celsius);
};

const toFarenheit = () => {
    const inputCelsius = document.getElementById('inputCelsius').value;
    const farenheit = 1.8 * inputCelsius + 32;
    displayResult(farenheit);
};

const displayResult = (celsius) => {
    let message = '';
    if (celsius < 22) {
        message = `Tá bem fresquim! Só ${celsius} °C`;
    } else if (celsius >= 22 && celsius <= 28) {
        message = 'Tá um sereno só o mi!';
    } else if (celsius > 30 && celsius <= 33) {
        message = 'Tá queimando o quengo!';
    } else if (celsius > 33) {
        message = 'Tá pegando fogo!';
    }

    resultDiv.innerHTML = `<p>${message}</p>`;
};