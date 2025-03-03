const searchField = document.getElementById('search-field')
const insertField = document.getElementById('insert-field')
const searchButton = document.getElementById('search-button')
const insertButton = document.getElementById('insert-button')
const resultDiv = document.getElementById('result')

searchButton.addEventListener('click', () => {
    fetch('/search?find=' + searchField.value)
    .then(res => res.text())
    .then(txt => {
        resultDiv.innerText = txt
    })
})

insertButton.addEventListener('click', () => {
    fetch('/insert?doc=' + insertField.value)
    .then(res => res.text())
    .then(txt => {
        resultDiv.innerText = txt
    })
})

