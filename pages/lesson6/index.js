// let wrapper = document.getElementById("wrapper")

// let wrapper = document.getElementById("wrapper")
// let innerElements = wrapper.getElementsByClassName("element")
// // wrapper.style.backgroundColor = "red"

// console.log(wrapper)
// console.log(innerElements)

// console.log(check.checked)


// // el1.style.backgroundColor = "red"

// console.log(document.getElementsByClassName("element"))

let element = document.querySelector("* [name='check']")

let elements = document.getElementsByClassName("element")

elements[3].classList.toggle("active")
elements[3].classList.toggle("active")

console.log(elements[3].className)

elements[3].setAttribute("data-some", "Some")
console.log(elements[3])
console.log(elements[3].dataset.some)
