// Exercise 2
// alert("This is not what your are tryin gto do!");
//  var promptval = prompt("yoooooo");
//  console.log(promptval);

// var promptval = prompt("yoooooo");
// console.log(promptval);
// alert("Welcome " + promptval);

// Exercise 3
var transbtn = document.querySelector("#transbtn");
// transbtn.addEventListener("click", printa);

// function printa() {
//     console.log("Clicked!");
// }

var input = document.querySelector("#input");
transbtn.addEventListener("click", printb);
function printb() {
    console.log(input.value);
}