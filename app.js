const numberKeys = Array.from(document.getElementsByClassName("number-key"));
const operationKeys = Array.from(document.getElementsByClassName("operation-key"));
const clearKey = document.getElementById("clear");
const delKey = document.getElementById("del");
const equalsKey = document.getElementById("equals");
const previousScreen = document.getElementById("previous");
const currentScreen = document.getElementById("current");

let num1 = "";
let operator = "";
let num2 = "";
let isExpressionValid = false;

clearKey.addEventListener("click", function clearDisplay(e) {
    previousScreen.textContent = "";
    currentScreen.textContent = "";
    clearAll();
})

delKey.addEventListener("click", function deleteCharacter(e) {
    if (currentScreen.textContent != "")
        currentScreen.textContent = currentScreen.textContent.slice(0, -1);
    else {
        previousScreen.textContent = previousScreen.textContent.slice(0, -1);
    }
})

equalsKey.addEventListener("click", function (e) {
    setOperandsAndOperatorAsPerDisplay();
    if (isExpressionValid)
        currentScreen.textContent = calculate();
    clearAll();
});

for (numberKey of numberKeys) {
    numberKey.addEventListener("click", function (e) {
        if (currentScreen.textContent.length <= 10) {
            currentScreen.textContent += this.textContent;
        }
    })
}

for (operationKey of operationKeys) {
    operationKey.addEventListener("click", function (e) {

        operator = this.textContent;

        if (currentScreen.textContent != "") {
            previousScreen.textContent = currentScreen.textContent;
            previousScreen.textContent += ` ${operator}`
            currentScreen.textContent = "";
        }
    })
}

function setOperandsAndOperatorAsPerDisplay() {

    const expression = `${previousScreen.textContent} ${currentScreen.textContent}`;
    const individualValues = expression.split(" ");

    num1 = Number(individualValues[0]);
    operator = individualValues[1];
    num2 = Number(currentScreen.textContent);

    if (num1 != null && operator != null && num2 != null)
        isExpressionValid = true;

    if (previousScreen.textContent.length < 5)
        previousScreen.textContent = expression;

    console.log(expression);
    console.log(num1, operator, num2);
}

function calculate() {

    let answer;

    if (operator == "+") {
        answer = num1 + num2;
        return answer;
    } if (operator == "-") {
        answer = num1 - num2;
        return answer;
    } if (operator == "x") {
        answer = num1 * num2;
        return answer;
    } if (operator == "/") {
        if (num2 != 0) {
            answer = num1 / num2;
            return answer;
        }
        else {
            alert("Can't divide by 0!");
        }
    }
}

function clearAll() {
    num1 = "";
    operator = "";
    num2 = "";
    isExpressionValid = false;
}