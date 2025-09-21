const numberbuttons = document.querySelectorAll('.number');
const operatorbuttons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay(v){
    display.innerText = v;
}

numberbuttons.forEach(b => {
    b.addEventListener('click', ()=>{
        currentInput = currentInput + b.id;
        updateDisplay(currentInput);
    })
})
operatorbuttons.forEach(b => {
    b.addEventListener('click', ()=>{
        if(b.id === 'clear'){
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay(0);
        }
        
        
        else if(b.id === 'equals'){
            if(currentInput !== '' && previousInput !== ''){
                currentInput = String(calculate());
                updateDisplay(currentInput);
                previousInput = '';
                operator = null;
            }
        }
        else{
            if(currentInput === '') return;
            if(previousInput !== ''){
                currentInput = String(calculate());
                updateDisplay(currentInput);
            }
            operator = b.id;
            previousInput = currentInput;
            currentInput = '';
        }c
    })
})

function calculate(){
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if(isNaN(prev) || isNaN(current)) return;
    let result;
    switch(operator){
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            if(current === 0){
                alert("Cannot divide by zero");
                return 0;
            }
            result = prev / current;
            break;
        default:
            return;
    }   
    return result;
}