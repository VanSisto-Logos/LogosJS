let lorem = document.getElementById("lorem")
let email = document.getElementById("email")
lorem.addEventListener("mousedown", () => {
    lorem.style.backgroundColor = "yellow"
})

document.addEventListener("keydown", showEvent)
document.addEventListener("contextmenu", e => {
    e.target.style.border = "4px solid black"
    console.log(e)
    return false
})

function showEvent(event) {
    console.log(event)
    lorem.innerText += event.key
}

email.addEventListener("focus", e => {
    e.target.style.backgroundColor = "green"
})
email.addEventListener("blur", e => {
    if (!email.validity.valid || email.value.length == 0) {
        e.target.style.backgroundColor = "red"
    }
})