console.log('JS OK');

const kmTodoField = document.getElementById('km');
const ageField = document.getElementById('age');
const inviaBtn = document.getElementById('invia')
const pricePerkm = 0.21;

inviaBtn.addEventListener('click', function(e) {
    // no ricaricamento
    e.preventDefault();

    const fPriceMsg = document.getElementById('final-price');
    const dscMsg = document.getElementById('message');
    const kmTodoValue = parseInt(kmTodoField.value);
    const ageValue = ageField.value;
    console.log('kmTodoValue', kmTodoValue);
    console.log('ageValue', ageValue);
    console.log('fPriceMsg', fPriceMsg);
    console.log('dscMsg', dscMsg);

    let basePrice = kmTodoValue * pricePerkm;
    console.log('basePrice', basePrice);

    let fullPrice = basePrice.toFixed(2);
    if (ageValue === 'adult') {
        fullPrice = basePrice;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `Il prezzo è: <strong>${fullPrice.toFixed(2)}€<strong>`;
    } else if (ageValue === 'underage') {
        fullPrice = basePrice * 0.8;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `Congratulazioni hai ricevuto uno sconto del 20%. Il prezzo è <strong>${fullPrice.toFixed(2)}€<strong>`;
    } else if (ageValue === 'over65') {
        fullPrice = basePrice * 0.6;
        console.log('fullPrice', fullPrice);
        dscMsg.innerHTML = `Congratulazioni hai ricevuto uno sconto del 40%. Il prezzo è <strong>${fullPrice.toFixed(2)}€<strong>`;
    }

}
)
