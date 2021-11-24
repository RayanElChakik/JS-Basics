var displayText = document.querySelector('#div-text');

var inputName = document.getElementById('name');

function changeFunction(){
    displayText.innerHTML = "Hello, I am " + inputName.value;
}