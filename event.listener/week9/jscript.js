// Function to change the background color of the output div
function changeBackgroundColor(newBgColor) {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.style.backgroundColor = newBgColor;
        outputDiv.textContent = `Background Color: ${newBgColor}`;
    }
}

// Get references to the buttons
const redBtn = document.getElementById('btn-red');
const yellowBtn = document.getElementById('btn-yellow');
const blueBtn = document.getElementById('btn-blue');
const blackBtn = document.getElementById('btn-black');
const calculateBtn = document.getElementById('btn-calculate');
const outputDiv = document.getElementById('output');

// Add event listeners to each button
if (redBtn) {
    redBtn.addEventListener('click', () => {
        changeBackgroundColor('red');
    });
}

if (yellowBtn) {
    yellowBtn.addEventListener('click', () => {
        changeBackgroundColor('yellow');
    });
}

if (blueBtn) {
    blueBtn.addEventListener('click', () => {
        changeBackgroundColor('blue');
    });
}

if (blackBtn) {
    blackBtn.addEventListener('click', () => {
        changeBackgroundColor('black');
        outputDiv.style.color = 'white'; // Change text color for black background
    });
}

if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        // This button's functionality wasn't clear from the image,
        // so it's set to change to a light green as an example.
        changeBackgroundColor('lightgreen');
        outputDiv.textContent = `Output Width: ${outputDiv.clientWidth}, Height: ${outputDiv.clientHeight}`;
        outputDiv.style.color = 'black'; // Reset text color
    });
}
// Get the toggle button and the links container
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-links');

// When button is clicked, show/hide the links
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});