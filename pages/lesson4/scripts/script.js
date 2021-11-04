let arr = [3, 15, 1, 4, 9, 5]


// console.log(arr.sort((a, b) => {
//     console.log(`a: ${a}\nb: ${b}`)
//     return a - b
// }))

console.log(arr.reverse())
console.log(arr.reverse())


arr = arr.concat("a", "b")

o = {
    key1: "val1",
    key2: "val2"
}

console.log(o)


console.log(arr.indexOf(12))

values = []

console.log(values)

arr2 = [88, 99]

arr.forEach((e, i) => {
    console.log("element: " + e)
    console.log("index: " + i)
    console.log("=================")
    values[i] = e

})

values
.filter(e => e < 10)
.map(e => e + "0")
.forEach(e => console.log(e))

console.log(
    values
        .every(e => e > 5)
)
console.log(
    values
        .some(e => e > 5)
)

values.unshift(-4, -6, -7)

function isNegative(a) {
    return a < 0
}

console.log(values.some(isNegative))

console.log(
    values
        .reduce((result, current, i) => {
            console.log(i)
            return result + current
        }, 100)
)

sum = 0
n = 7 
str = ""
for(i = 0; i <= n; i++) {
    sum += i;
    str += i + " + "
}
str += " = " + sum

console.log(str)

function f() {
    for(i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}

f(3, "ab")