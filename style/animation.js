var products = document.getElementById("productBox");
var fronts = document.getElementById("frontImg");
var backs = document.getElementById("backImg");

function cardRight(){
    products.style.transform ="rotateY(180deg";
    fronts.style.left = "650px";
    backs.style.left = "20px";
    fronts.style.transform = "rotate(-30deg)";
    backs.style.transform = "rotate(0deg)";
   
}
function cardLeft(){
    products.style.transform = "rotateY(0deg)";
    
   fronts.style.left  = "20px";
   backs.style.left = "-650px";
   fronts.style.transform = "rotate(0deg)";
   backs.style.transform ="rotate(-30deg)";
}