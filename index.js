let count = 0;

const counter = document.querySelector('h2')

const increaseCounter = () => {
    document.querySelector('#increment').addEventListener('click', () => {
        count++
        counter.textContent = count
    })
}

const resetCounter = () => {
    document.querySelector('#reset').addEventListener('click', () => {
        count = 0
        counter.textContent = count
    })
}

const decreaseCounter = () => {
    document.querySelector('#decrement').addEventListener('click', () => {
        count--
        counter.textContent = count
    })
}

increaseCounter()
resetCounter()
decreaseCounter()