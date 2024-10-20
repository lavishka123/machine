function getNumber(element) {
    var elementValue =  element.innerText
    var inputValue = document.getElementById("output")
  
    inputValue.value += elementValue;
}

function getResult() {
    var inputValue = document.getElementById("output")
    inputValue.value = eval(inputValue.value)

}


function clearAllValue(){
    var inputValue = document.getElementById("output");
    inputValue.value = ""
}


function clearValue() {
    var inputValue = document.getElementById("output");
    // Sirf last character ko remove kare
    inputValue.value = inputValue.value.slice(0, -1);
}
