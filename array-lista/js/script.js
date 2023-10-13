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
let found = false;
let cocomero = 'cocomero';
btn.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');
    let valoreInserito = (inputEl.value);
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
for(i = 0; i < fridge.length; i++){
    if(cocomero === fridge[i]){
        found = true;
    } 
}
if(found === true){
    console.log("Trovato! Devo solo preparare il cocktail.");
} else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}
