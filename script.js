const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const inputCalculo1 = document.querySelector('#input-calculo1');
const inputCalculo2 = document.querySelector('#input-calculo2');
const btnCalcular = document.querySelector('#btn-calcular');
const result = document.querySelector('#result'); 

//form.addEventListener('submit', sumarInputValues);

//function sumarInputValues(event) {
//    const res = parseInt(inputCalculo1.value) + parseInt(inputCalculo2.value);
//    result.innerText = 'Resultado: ' + res;
//    event.preventDefault();
//}

//Otra forma de hacerlo, colocando el input de tipo button

btnCalcular.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    const res = parseInt(inputCalculo1.value) + parseInt(inputCalculo2.value);
    result.innerText = 'Resultado: ' + res;
}
