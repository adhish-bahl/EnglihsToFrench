// Exercise 2
// alert("This is not what your are tryin gto do!");
//  var promptval = prompt("yoooooo");
//  console.log(promptval);

// var promptval = prompt("yoooooo");
// console.log(promptval);
// alert("Welcome " + promptval);

// Exercise 3
// transbtn.addEventListener("click", printa);

// function printa() {
    //     console.log("Clicked!");
    // }
    
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var transbtn = document.querySelector("#transbtn");
var url = "https://api.funtranslations.com/translate/minion.json?text=";

function errorHandler() {
    alert("The server is not responding, kindly try again later!")
}

function printb() {
    var inputvalue = input.value;
    fetch(url+inputvalue)
    .then(response => response.json())
    // .then(json => console.log(json.contents.text))
    .then(json => {
        var outputtext = json.contents.translated;
        output.innerText = outputtext;
    })
    .catch(errorHandler)
    // output.innerText = inputvalue;
}

transbtn.addEventListener("click", printb);