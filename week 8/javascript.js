const textElements = document.querySelectorAll('.wrapper');

const textElementLength = textElements.length;
// console.log(textElements.length);

for (let i = 0; i < textElementLength; i++) {
    // console.log(textElements[i]);
    if (i === 0) {
        textElements[i].style.backgroundColor = 'red';
    }

    if (i === 1) {
        textElements[i].style.backgroundColor = 'brown';
    }
}

// Accessing elements using forEach loop
textElements.forEach((element, index) => {
    console.log(textElementLength, index);
});
