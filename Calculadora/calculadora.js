let display = document.getElementById('display');
let history = document.getElementById('history');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

let n = 0
function calculateResult() {
    try {
        let result = eval(display.value);
        let cadena = display.value + ' = ' + result
        localStorage.setItem(n,cadena)
        n = n + 1
        // Agrega la operación al historial
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';

        // Agrega el error al historial
        addToHistory('Error: ' + error.message);
    }
}

function addToHistory(entry) {
    history.innerHTML += '<p>' + entry + '</p>';
}

window.onload = function(){
    for(x=0;x<5;x++){
        history.innerHTML += '<p>' + localStorage.getItem(x) + '<\p>'

    }

}
