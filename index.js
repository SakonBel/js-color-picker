// Grab the button
const randomOne = document.querySelector('.random-one');
const randomTwo = document.querySelector('.random-two');
const randomThree = document.querySelector('.random-three');
const randomFour = document.querySelector('.random-four');
const randomAll = document.querySelector('.random-all');

// Grab the hex display text
const hexOne = document.querySelector('.hex-one');
const hexTwo = document.querySelector('.hex-two');
const hexThree = document.querySelector('.hex-three');
const hexFour = document.querySelector('.hex-four');

// Grab the color element
const colorOne = document.querySelector('.color-one');
const colorTwo = document.querySelector('.color-two');
const colorThree = document.querySelector('.color-three');
const colorFour = document.querySelector('.color-four');

// Set initial hex array
const hexNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];

// Create the random color function
const randomColor = (color, hex) => {
    let randomNumber = '#';

    for (i=0; i<6; i++) {
        let value = hexNumber[Math.floor(Math.random()*16)];
        randomNumber += value;
    }

    color.style.backgroundColor = randomNumber;
    hex.textContent = randomNumber;
};

// Add event to the random color function
randomOne.addEventListener('click', () => randomColor(colorOne, hexOne));
randomTwo.addEventListener('click', () => randomColor(colorTwo, hexTwo));
randomThree.addEventListener('click', () => randomColor(colorThree, hexThree));
randomFour.addEventListener('click', () => randomColor(colorFour, hexFour));
randomAll.addEventListener('click', () => {
    randomColor(colorOne, hexOne);
    randomColor(colorTwo, hexTwo);
    randomColor(colorThree, hexThree);
    randomColor(colorFour, hexFour);
});
