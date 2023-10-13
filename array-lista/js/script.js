const fridge = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
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
fridge.push('pesca');
console.log(fridge);
for(i = 0; i < fridge.length; i++){
    if(cocomero === fridge[i]){
        found = true;
    } 
}
if(found = true){
    console.log("Trovato! Devo solo preparare il cocktail.");
} else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}