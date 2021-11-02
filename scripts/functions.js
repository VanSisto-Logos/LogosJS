function add(a, b) {
    function print(){
        console.log(this.sum)
    }

    sum = a + b

    print()
}

// console.log( add(2,3) )

add(2,3)

let fun = function() {
    console.log("Inside fun")
}

fun()

function fun2(anoterFun) {
    console.log("Isnide 2:")
    anoterFun()
}

fun2(fun)

let fun3 = (g, h) => {
    console.log(g)
    console.log(h)
}

fun3 = (a, b, c) => {
    console.log(a + b + c)
}

let fun4 = (a = "World") => {
    console.log(`Hello ${a}`)
}

fun4()
fun4("Name")

o = {
    value: 2,
    met: function(){
        return this.value * 2
    }
}

console.log(o.met())
o.value = 4
console.log(o.met())

const RED="RED", BLUE="BLUE", PI=3.14;

circle = {
    radius: 5,
    color: RED,
    square: function(){
        return PI * Math.pow(this.radius, 2)
    },
    length: function() {
        return 2 * PI * this.radius
    },
    showInfo: function() {
        console.log(JSON.stringify(this))
    },
    toString: function() {
        return JSON.stringify(this)
    }
}

console.log(circle.square())
circle.radius = 2
console.log(circle.length())
circle.showInfo()

document.write(circle.toString())
