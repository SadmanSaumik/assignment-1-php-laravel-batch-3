document.getElementById("calculate").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("result");
  if (!isNaN(num1) && !isNaN(num2)) {
    let cal;
    if (operation === "addition") {
      cal = num1 + num2;
    } else if (operation === "subtraction") {
      cal = num1 - num2;
    } else if (operation === "multiplication") {
      cal = num1 * num2;
    } else if (operation === "division") {
      if (num2 === 0) {
        result.style.display = "block";
        result.classList.remove("alert-primary");
        result.classList.add("alert-danger");
        return (result.innerHTML = "Cannot divide by zero.");
      } else {
        cal = num1 / num2;
      }
    }
    result.style.display = "block";
    result.classList.add("alert-primary");
    result.classList.remove("alert-danger");
    result.innerHTML = `Result: ${cal}`;
  } else {
    result.style.display = "block";
    result.classList.remove("alert-primary");
    result.classList.add("alert-danger");
    return (result.innerHTML = "Insert Valid Number");
  }
});
