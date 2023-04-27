function updateProductQuantity(isIncrease, value) {
    const inputNumberField = document.getElementById(value);
    const inputNumberString = inputNumberField.value;
    const currentinputNumber = parseInt(inputNumberString);
    let updateInputNumber;
    if (isIncrease) {
        updateInputNumber = currentinputNumber + 1;
    }
    else {
        updateInputNumber = currentinputNumber - 1;
    }

    inputNumberField.value = updateInputNumber;
    return updateInputNumber;
}
function updateProductPrice(updateInputNumber, value, price) {
    const productPriceField = document.getElementById(value);
    const updateProductPrice = updateInputNumber * price;
    productPriceField.innerText = updateProductPrice;
}
function subTotalId(value) {
    const inputNumberField = document.getElementById(value);;
    const inputNumberString = inputNumberField.innerText;
    const inputNumber = parseFloat(inputNumberString);
    return inputNumber;
}
function subTotalValue() {
    const phonePrice = subTotalId('phone-total');
    const casePrice = subTotalId('case-total');
    const subTotalPrice = phonePrice + casePrice;
    const subtotalPriceField = document.getElementById('sub-total');
    subtotalPriceField.innerText = subTotalPrice;
    //tax calculate 
    const taxField = document.getElementById('tax');
    const taxString = (subTotalPrice * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    taxField.innerText = tax
    // calculate total 
    const totalAmountField = document.getElementById('final-total');
    const totalAmountString = (tax + subTotalPrice).toFixed(2);
    const totalAmount = parseFloat(totalAmountString);
    totalAmountField.innerText = totalAmount;
}
