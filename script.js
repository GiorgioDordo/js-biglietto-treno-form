console.log('JS OK');

const kmTodoField = document.getElementById('km');
const ageField = document.getElementById('age');
const calculateBtn = document.getElementById('calculate')
const nameUserField = document.getElementById('firstname-lastname');

const pricePerkm = 0.21;

calculateBtn.addEventListener('click', function(e) {
    // no ricaricamento
    e.preventDefault();

    // form data
    const typeTicket = document.getElementById('ticket-type');
    const fPriceMsg = document.getElementById('final-price');
    const dscMsg = document.getElementById('ticket-price'); 

    const kmTodoValue = parseInt(kmTodoField.value);
    const ageValue = ageField.value;
    console.log('kmTodoValue', kmTodoValue);
    console.log('ageValue', ageValue);

    const nameText = document.getElementById('name');
    const nameValue = nameUserField.value.trim();
    nameText.innerHTML = nameValue;
    console.log('nameValue', nameValue);

    // Validation
    const isNameValid = !nameValue;
    const isAgeValid = ageValue !== 'over65' && ageValue !== 'underage' && ageValue !== 'adult' && ageValue !== '';
    const isKmValid = isNaN(kmTodoValue) || kmTodoValue < 10 || kmTodoValue > 300;

    if( isNameValid || isAgeValid || isKmValid) {
        alert('error')
    } else {

    // price calc
    let basePrice = kmTodoValue * pricePerkm;
    console.log('basePrice', basePrice);

    let fullPrice = basePrice.toFixed(2);
    if (ageValue === 'adult') {
        fullPrice = basePrice;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `${fullPrice.toFixed(2)}€`; 
        typeTicket.innerHTML = `STANDARD`;
    } else if (ageValue === 'underage') {
        fullPrice = basePrice * 0.8;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `${fullPrice.toFixed(2)}€`;
        typeTicket.innerHTML = `20% discount`;
    } else if (ageValue === 'over65') {
        fullPrice = basePrice * 0.6;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `${fullPrice.toFixed(2)}€`;
        typeTicket.innerHTML = `40% discount`;
    }

    // ticket data

    const carriageN = document.getElementById('carriage');
    carriageN.innerHTML = Math.floor(Math.random() * 26);

    const codeTicket = document.getElementById('ticket-code');
    codeTicket.innerHTML = Math.floor(Math.random() * 10001);
}
}
)
