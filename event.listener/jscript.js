const buttons = document.querySelectorAll('button');
const outputElement = document.querySelector('h1');

let count = 0;

buttons[0].addEventListener('click', () => {
    if (count < 10) {
        count++;
        outputElement.textContent = count;
    } else {
        alert('Maximum limit reached!');
    }
});

buttons[1].addEventListener('click', () => {
    if (count > 0) {
        count--;
        outputElement.textContent = count;
    } else {
        alert('Minimum limit reached!');
    }
});
