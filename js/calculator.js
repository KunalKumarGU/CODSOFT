const buttons = document.querySelectorAll(".button");
const displayScreen = document.getElementById("displayScreen");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "AC") {
      clearDisplay();
    } else if (e.target.innerText == "DEL") {
      deleteElement();
    } else if (e.target.innerText == "=") {
      displayScreen.value = showResult(displayScreen.value);
    } else {
      updateDisplay(e.target.innerText);
    }
  });
});

const clearDisplay = () => {
  displayScreen.value = "0";
};

const deleteElement = () => {
  let temp = displayScreen.value;
  displayScreen.value = "";
  for (let i = 0; i < temp.length - 1; i++) {
    displayScreen.value += temp[i];
  }
};

const updateDisplay = (text) => {
  displayScreen.value += text;
};

const showResult = (input) => {
  try {
    const result = eval(input);
    if (isNaN(result)) {
      return "Invalid input";
    } else {
      return result;
    }
  } catch (error) {
    return "Error: " + error.message;
  }
};
