const fridge = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'limone',
    'fragola'
]
console.log(fridge);
const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
let msg;
btn.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove('alert-success');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');
    let valoreInserito = inputEl.value;
    if(!isNaN(valoreInserito)){
        console.log('errore');
        alertColor = 'alert-danger';
        msg = 'Hai inserito un numero!';
        console.log(valoreInserito);
    } else{
        msg = 'Frutto inserito!';
        fridge.push(valoreInserito);
        console.log(fridge);
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})
fridge.push('pesca');
console.log(fridge);

const btnSearch = document.querySelector('.button');
const searchEl = document.getElementById('search');
btnSearch.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove('alert-success');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');
    let valoreInserito = (searchEl.value);
    let frutto = valoreInserito;
    let found = false;
    if(!isNaN(valoreInserito)){
        console.log('errore');
        alertColor = 'alert-danger';
        msg = 'Hai inserito un numero!';
        console.log(valoreInserito);
    } else{
        for(i = 0; i < fridge.length; i++){
            if(frutto === fridge[i]){
                found = true;
            } 
        }
        if(found === true){
            msg = 'Trovato! Devo solo preparare il cocktail.';
            console.log("Trovato! Devo solo preparare il cocktail.");
        } else{
            msg = 'Oh no, devo uscire a comprare' + " " + frutto;
            alertColor = 'alert-danger';
            console.log("Oh no, devo uscire a comprare" + " " + frutto);
        }
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})