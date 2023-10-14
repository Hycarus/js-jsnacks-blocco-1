const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
const resultElTwo = document.querySelector('.alert-2');
const btnSearch = document.querySelector('.button');
const searchEl = document.getElementById('search');
let msg = ' ';
let msg2 = ' ';
let array1 = [
    '1',
    '2',
    '3',
    '4'
]
let array2 = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
]
if(array1.length > array2.length){
   let differenza = array1.length - array2.length;
   for(let i = 0; i < differenza; i++){
        array2.push('element');
   }
   console.log('array 1 era più lungo');
   console.log(array1.length);
   console.log(array2.length);
} else if(array2.length > array1.length){
    let differenza = array2.length - array1.length;
    for(let i = 0; i < differenza; i++){
        array1.push('element');
    }
    console.log('array 2 era più lungo');
    console.log(array1.length);
    console.log(array2.length);
} else{
    console.log('Sono già uguali');
    console.log(array1.length);
    console.log(array2.length);
}