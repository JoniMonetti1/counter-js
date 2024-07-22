const numberElement = document.getElementById('number');
const input = document.getElementById('gap');

let gap = parseInt(input.value) || 1;

input.addEventListener('input', () => {
    gap = parseInt(input.value) || 1;
});

const getCurrentValue = () => parseInt(numberElement.textContent); 

const increase = () => {
    const currentValue = getCurrentValue();
    numberElement.textContent = currentValue + gap;
    setColor();
}

const decrease = () => {
    const currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = currentValue - gap;
    setColor();
}

const reset = () => {
    numberElement.textContent = 0;
    setColor();
}

const setColor = () => {
    const currentValue = parseInt(numberElement.textContent);
    if (currentValue > 0) {
        numberElement.classList.add('positive');
        numberElement.classList.remove('negative');
    } else if(currentValue < 0) {
        numberElement.classList.remove('positive');
        numberElement.classList.add('negative');
    } else {
        numberElement.classList.remove('positive', 'negative');
    }
};   


input.addEventListener('focus', () => {
    input.classList.add('focused');
});

input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
        input.classList.remove('focused');
    }
});