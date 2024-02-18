// Length Conversion Function
function convertLength() {
    // Get selected units and input value
    var fromUnit = document.getElementById("lengthFromUnit").value;
    var toUnit = document.getElementById("lengthToUnit").value;
    var inputValue = parseFloat(document.getElementById("lengthInputValue").value);

    // Perform conversion
    var result;
    if (fromUnit === "inches" && toUnit === "centimeters") {
        result = inputValue * 2.54; // 1 inch = 2.54 centimeters
    } else if (fromUnit === "centimeters" && toUnit === "inches") {
        result = inputValue / 2.54; // 1 centimeter = 0.393701 inches
    } else {
        // If the units are the same, or an unsupported conversion, set result to NaN
        result = NaN;
    }

    // Display the result
    var resultBox = document.getElementById("lengthResult");
    if (!isNaN(result)) {
        resultBox.textContent = "Result: " + result.toFixed(2) + " " + toUnit;
    } else {
        resultBox.textContent = "Invalid conversion. Please check your units.";
    }
}

