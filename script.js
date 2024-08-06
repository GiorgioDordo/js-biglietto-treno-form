console.log('JS OK');

const kmTodoField = document.getElementById('km');
const ageField = document.getElementById('age');
const invia = document.getElementById('invia')
const pricePerkm = 0.21;

invia.addEventListener('click', function(e) {
    // no ricaricamento
    e.preventDefault();

    const kmTodoValue = parseInt(kmTodoField.value);
    const ageValue = ageField.value;
    console.log('kmTodoValue', kmTodoValue);
    console.log('ageValue', ageValue);

    let basePrice = kmTodoValue * pricePerkm;
    console.log('basePrice', basePrice);
}
)

