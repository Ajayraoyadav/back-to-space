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

document.querySelector(".form-heading-getStarted").addEventListener("click",function(){
    alert("Hlo Moon");
})



var btn_moon = document.querySelector(".Themoon");
var btn_mars = document.querySelector(".mars");

var the_moon = document.querySelector(".tabs-content-moon");
var mars = document.querySelector(".tabs-content-mars");



btn_moon.addEventListener("click",()=>{
    the_moon.style.display="block";
    mars.style.display="none";
    
})


btn_mars.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="block";
})