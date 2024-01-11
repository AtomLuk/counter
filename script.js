const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');

const addition = () => {
    // current value and convert to #
    var currentValue = counterValueEl.textContent;
    const currentValueAsNumber =  +currentValue;

    // increment
    let newValue = currentValueAsNumber + 1;
    console.log(typeof newValue);

    // limit
    if(newValue > 10){
        newValue = 10;

        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = '<b>Limit!</b> Pay for >10!'
    }
    // replace with new value
    counterValueEl.textContent = newValue;
    increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', addition);
document.addEventListener('keydown', addition); // use keys for interactions

decreaseButtonEl.addEventListener('click', function() {
    // current value and convert to #
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    // decrement
    let newValue = currentValueAsNumber - 1;

    // Prevent negatives
    if(newValue < 0){
        newValue = 0;
    }

    // replace with new value
    counterValueEl.textContent = newValue;
    decreaseButtonEl.blur();
})

resetButtonEl.addEventListener('click', () => {
    // reset
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter--limit');
    counterTitleEl.textContent = 'Clicky Click';

    //unfocus reset button (space button would keep going 0 and 1 after reset)
    resetButtonEl.blur();
})


