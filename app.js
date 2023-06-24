const numberKeys = Array.from(document.getElementsByClassName("number-key"));
const operationKeys = Array.from(document.getElementsByClassName("operation-key"));
const clearKey = document.getElementById("clear");
const delKey = document.getElementById("del");
const display = document.getElementById("display");


clearKey.addEventListener("click", function clearDisplay(e) {
    if (display.hasChildNodes)
        display.innerText = "";
})

delKey.addEventListener("click", function deleteCharacter(e) {
    let updatedText = display.innerText.slice(0, -1);
    display.innerText = "";
    display.append(updatedText);
})

for (numberKey of numberKeys) {
    numberKey.addEventListener("click", function putNumberOnDisplay(e) {
        display.append(this.innerText);
    })
}

for (operationKey of operationKeys) {
    operationKey.addEventListener("click", function putOperatorOnDisplay(e) {
        if (this.innerText !== "=")
            display.append(this.innerText);
    })
}