const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
const resultElTwo = document.querySelector('.alert-2');
const btnSearch = document.querySelector('.button');
const searchEl = document.getElementById('search');
let msg = ' ';
let msg2 = ' ';
let arrayTail = [
    inputEl
]
console.log(arrayTail);
btn.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove('alert-success');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');
    let valoreInserito = parseInt(inputEl.value);
    if(isNaN(valoreInserito)){
        console.log('errore');
        alertColor = 'alert-danger';
        msg = 'Non hai inserito un numero!';
    } else{
        msg = 'Ecco gli ultimi 5 valori!';
        for(let i = 1; i <= valoreInserito; i++){
            let randomNumber = getRndInteger(1, 100);
            console.log(randomNumber);
            arrayTail.push(randomNumber);
        }
        console.log('valori creati');
        for(let i = arrayTail.length -5; i < arrayTail.length; i++){
            let returnNumber = arrayTail[i];
            msg += ' ' + returnNumber;
            console.log(returnNumber);
        }
    }
    
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})
btnSearch.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultElTwo.classList.remove('alert-success');
    resultElTwo.classList.remove('alert-danger');
    resultElTwo.classList.add('d-none');
    let valoreInserito = parseInt(searchEl.value);
    if(isNaN(valoreInserito)){
        console.log('errore');
        alertColor = 'alert-danger';
        msg = 'Non hai inserito un numero!';
    } else{
        for(let i = arrayTail.length - valoreInserito; i < arrayTail.length; i++){
            let returnNumber = arrayTail[i];
            msg2 += ' ' + returnNumber;
            console.log(returnNumber);
            console.log(msg2);
        }
        // let msg2 = arrayTail.slice(arrayTail.length - valoreInserito, arrayTail.length);
        resultElTwo.innerHTML = msg2;
    }
    resultElTwo.classList.add(alertColor);
    resultElTwo.classList.remove('d-none');
    
})