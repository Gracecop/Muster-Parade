let countEl = document.getElementById("number")
let paraEl = document.getElementById("para")
let count = 0

function btn() {
    count += 1
    countEl.textContent = count 
}

function btn2() {
    paraEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}