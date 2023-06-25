const numberKeys = Array.from(document.getElementsByClassName("number-key"));
const operationKeys = Array.from(document.getElementsByClassName("operation-key"));
const clearKey = document.getElementById("clear");
const delKey = document.getElementById("del");
const equalsKey = document.getElementById("equals");
const displayExpression = document.getElementById("expression");
const displayAnswer = document.getElementById("answer");


clearKey.addEventListener("click", function clearDisplay(e) {
    displayExpression.innerText = "";
})

delKey.addEventListener("click", function deleteCharacter(e) {
    displayExpression.innerText = displayExpression.innerText.slice(0, -1);
})

equalsKey.addEventListener("click", function (e) {
    let expression = displayExpression.textContent.split(" ");
    expressionEvaluator(expression);
})

function expressionEvaluator(expression) {
    // displayAnswer.textContent += expression;
    console.log(expression.length);
}

for (numberKey of numberKeys) {
    numberKey.addEventListener("click", function putNumberOnDisplay(e) {
        displayExpression.textContent += `${this.textContent}`;
    })
}

for (operationKey of operationKeys) {
    operationKey.addEventListener("click", function putOperatorOnDisplay(e) {
        if (this.innerText !== "=")
            displayExpression.textContent += ` ${this.textContent} `;
    })
}