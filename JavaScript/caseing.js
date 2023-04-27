document.getElementById('btn-plus-case').addEventListener('click', function () {
    const updateInputNumberCase = updateProductQuantity(true, 'case-number-field');
    updateProductPrice(updateInputNumberCase, 'case-total', 59);
    subTotalValue()
})
document.getElementById('btn-minus-case').addEventListener('click', function () {
    const updateInputNumberCase = updateProductQuantity(false, 'case-number-field');
    updateProductPrice(updateInputNumberCase, 'case-total', 59);
    subTotalValue()
})
