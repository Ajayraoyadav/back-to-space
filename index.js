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
var btn_moon = document.querySelector(".Themoon");
var btn_mars = document.querySelector(".mars");
var btn_jupiter = document.querySelector(".jupiter");
var btn_saturn = document.querySelector(".saturn");



var the_moon = document.querySelector(".tabs-content-moon");
var mars = document.querySelector(".tabs-content-mars");
var jupiter = document.querySelector(".tabs-content-jupiter");
var saturn = document.querySelector(".tabs-content-saturn");



btn_moon.addEventListener("click",()=>{
    the_moon.style.display="block";
    mars.style.display="none";
    jupiter.style.display="none";
    saturn.style.display="none";
    btn_mars.classList.remove("active")
    btn_moon.classList.add("active")
    btn_jupiter.classList.remove("active")
    btn_mars.classList.remove("active")

})


btn_mars.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="block";
    jupiter.style.display="none";
    saturn.style.display="none";
    btn_mars.classList.add("active");
    btn_moon.classList.remove("active");
    btn_saturn.classList.remove("active");
    btn_jupiter.classList.remove("active");
  
})


btn_jupiter.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="none";
    jupiter.style.display="block";
    saturn.style.display="none";
    btn_jupiter.classList.add("active");
    btn_moon.classList.remove("active");
    btn_mars.classList.remove("active");
    btn_saturn.classList.remove("active");
})
btn_saturn.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="none";
    jupiter.style.display="none";
    saturn.style.display="block";
    btn_jupiter.classList.remove("active");
    btn_moon.classList.remove("active");
    btn_mars.classList.remove("active");
    btn_saturn.classList.add("active");
})