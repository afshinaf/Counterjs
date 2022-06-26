let count = 0;

const counter = document.querySelector('h2')

const increaseCounter = () => {
    document.querySelector('#increment').addEventListener('click', () => {
        count++
        counter.textContent = count
        counter.classList.remove("decrease")
        counter.classList.add("increase")
    })
}

const resetCounter = () => {
    document.querySelector('#reset').addEventListener('click', () => {
        count = 0
        counter.textContent = count
        counter.classList.remove("decrease", "increase")
    })
}

const decreaseCounter = () => {
    document.querySelector('#decrement').addEventListener('click', () => {
        count--
        counter.textContent = count
        counter.classList.remove("increase")
        counter.classList.add("decrease")
    })
}

increaseCounter()
resetCounter()
decreaseCounter()