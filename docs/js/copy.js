function copy(value) {
    var input = document.createElement("input"); // creates input element
    document.body.appendChild(input); // appends input to the body
    input.select(); // selects
    input.setSelectionRange(0, 99999); // for mobile
    document.execCommand("copy"); // copies
    input.remove(); // removes from DOM
}

function copyElement(value, element) {
    copy(value); // copies value
    var oldVal = element.innerHTML; // stores old value
    element.innerHTML = "Copied"; // changes innerHTML value to "Copied"
    setTimeout(function() {element.innerHTML = oldVal}, 1000) // after a 1000ms delay, it reverts the text back to normal
}