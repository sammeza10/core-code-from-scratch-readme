let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = displayValue.replace("%", "/100");

    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = "";
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function changeSign(param) {
  const operators = ["+", "-", "*", "/"];
  const lastIndex = Math.max(
    ...operators.map((operator) => displayValue.lastIndexOf(operator))
  );

  if (param === "first") {
    const firstParam = displayValue.slice(0, lastIndex + 1);
    const newFirstParam = changeSingleParamSign(firstParam);
    const secondParam = displayValue.slice(lastIndex + 1);

    displayValue = newFirstParam + secondParam;
  } else {
    const firstParam = displayValue.slice(0, lastIndex + 1);
    const secondParam = displayValue.slice(lastIndex + 1);
    const newSecondParam = changeSingleParamSign(secondParam);

    displayValue = firstParam + newSecondParam;
  }

  document.getElementById("display").value = displayValue;
}

function changeSingleParamSign(param) {
  if (param.charAt(0) === "-") {
    return param.substr(1);
  } else {
    return "-" + param;
  }
}
