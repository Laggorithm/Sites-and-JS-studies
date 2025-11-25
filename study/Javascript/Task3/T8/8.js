function toInt(value) {

    if (!isNaN(value) && value.trim() !== "") {
        return parseInt(value);
    }

    return value.length;
}

document.getElementById("start").addEventListener("click", function () {
    const num1Raw = document.getElementById("num1").value;
    const num2Raw = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    const resultField = document.getElementById("result");

    const num1 = toInt(num1Raw);
    const num2 = toInt(num2Raw);

    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                resultField.textContent = "Error: division by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultField.textContent = "Unknown operation";
            return;
    }

    resultField.textContent = `Result: ${result}`;
});
