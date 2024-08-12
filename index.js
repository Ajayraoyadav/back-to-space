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

})


btn_mars.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="block";
    jupiter.style.display="none";
    saturn.style.display="none";
})


btn_jupiter.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="none";
    jupiter.style.display="block";
    saturn.style.display="none";
})
btn_saturn.addEventListener("click",()=>{
    the_moon.style.display="none";
    mars.style.display="none";
    jupiter.style.display="none";
    saturn.style.display="block";
})


var buttons = document.querySelector("#activealll");

buttons.forEach(button=>{
    button.addEventListener("click",function(){
        buttons.forEach(btn=>btn.classList.remove("active"));
        this.classList.add("active")
    })
})


// login page

const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
const email = document.getElementById("form-input");
const submit = document.querySelector(".submit");


signInBtn.onclick = function (){
 nameField.style.maxHeight = "0";
 title.innerHTML="Sign In";
 signUpBtn.classList.add("disable");
 signInBtn.classList.remove("disable");
 email.reset();
 submit.style.display="block"
}
signUpBtn.onclick = function (){
 nameField.style.maxHeight = "60px";
 title.innerHTML="Sign Up";
 signUpBtn.classList.remove("disable");
 signInBtn.classList.add("disable");
 submit.style.display="none";
}
