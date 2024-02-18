// Weight Conversion Function
function convertWeight() {
    // Get selected units and input value
    var fromUnit = document.getElementById("weightFromUnit").value;
    var toUnit = document.getElementById("weightToUnit").value;
    var inputValue = parseFloat(document.getElementById("weightInputValue").value);

    // Perform conversion
    var result;
    if (fromUnit === "pounds" && toUnit === "kilograms") {
        result = inputValue * 0.453592; // 1 pound = 0.453592 kilograms
    } else if (fromUnit === "kilograms" && toUnit === "pounds") {
        result = inputValue / 0.453592; // 1 kilogram = 2.20462 pounds
    } else {
        // If the units are the same or an unsupported conversion, set result to NaN
        result = NaN;
    }

    // Display the result
    var resultBox = document.getElementById("weightResult");
    if (!isNaN(result)) {
        resultBox.textContent = "Result: " + result.toFixed(2) + " " + toUnit;
    } else {
        resultBox.textContent = "Invalid conversion. Please check your units.";
    }
}
