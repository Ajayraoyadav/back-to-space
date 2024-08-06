document.getElementById('decrease').addEventListener('click', function() {
    var quantity = document.getElementById('quantity');
    var currentValue = parseInt(quantity.value);
    if (currentValue > parseInt(quantity.min)) {
        quantity.value = currentValue - parseInt(quantity.step);
    }
});

document.getElementById('increase').addEventListener('click', function() {
    var quantity = document.getElementById('quantity');
    var currentValue = parseInt(quantity.value);
    if (currentValue < parseInt(quantity.max)) {
        quantity.value = currentValue + parseInt(quantity.step);
    }
});