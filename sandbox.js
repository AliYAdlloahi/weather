let display = document.getElementById("display");
let buttons = document.querySelectorAll("#buttons button");
let currentNumber = "";
let nextNumber = "";
let operator = null;

buttons.forEach((button) => {
  console.log(currentNumber, nextNumber, operator);
  button.addEventListener("click", () => {
    if (button.innerText.match(/\d/)) {
      if (currentNumber) {
        nextNumber += button.innerText;
        display.value = nextNumber;
      } else if (!nextNumber) {
        currentNumber += button.innerText;
        display.value = currentNumber;
      }
    } else if (button.innerText === "C") {
      currentNumber = "";
      nextNumber = "";
      operator = null;
      display.value = "";
    } else if (["+", "-", "*", "/"].includes(button.innerText)) {
      operator = button.innerText;
      display.value = "";
    } else if (button.innerText === "=") {
      if (currentNumber === "" || operator === null) {
        alert("Please enter a valid expression.");
      } else {
        let result = eval(`${currentNumber}${operator}${nextNumber}`);
        display.value = result;
        operator = null;
        currentNumber = result;
        nextNumber = "";
      }
    }
  });
});
