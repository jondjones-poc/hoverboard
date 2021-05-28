const container = document.getElementById('container');
const colors = ['#ee4035','#f37736','#fdf498','#7bc043','#0392cf'];
const NUMBER_OF_SQUARES = 400;


const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const setColor = (element) => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}

const removeColor = (element) => {
    var style = getComputedStyle(document.body)
    element.style.background = style.getPropertyValue('--primary');
    element.style.boxShadow = `0 0 2px ${style.getPropertyValue('--primary')}`;
}

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseout', () => {
        removeColor(square);
    })
    container.appendChild(square);
}