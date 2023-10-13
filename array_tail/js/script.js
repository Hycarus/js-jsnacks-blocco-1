const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
const btnSearch = document.querySelector('.button');
const searchEl = document.getElementById('search');
let msg;
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
        msg = 'Valori creati!';
        for(i = 1; i <= valoreInserito; i++){
            let randomNumber = getRndInteger(1, 100);
            console.log(randomNumber);
            arrayTail.push(randomNumber);
        }
        console.log('valori creati');
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})
console.log(arrayTail);
btnSearch.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove('alert-success');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');
    let valoreInserito = parseInt(searchEl.value);
    if(isNaN(valoreInserito)){
        console.log('errore');
        alertColor = 'alert-danger';
        msg = 'Non hai inserito un numero!';
    } else{
        for(i = 0; i < arrayTail.length; i++){
            const returnNumber = arrayTail.slice(-1, -5);
            console.log(returnNumber);
        }
        
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})