document.getElementById('btn-plus-phone').addEventListener('click', function () {
    const updateInputNumberPhone = updateProductQuantity(true, 'phone-number-field');
    updateProductPrice(updateInputNumberPhone, 'phone-total', 1219);
    subTotalValue()
})
document.getElementById('btn-minus-phone').addEventListener('click', function () {
    const updateInputNumberPhone = updateProductQuantity(false, 'phone-number-field');
    updateProductPrice(updateInputNumberPhone, 'phone-total', 1219);
    subTotalValue()
})