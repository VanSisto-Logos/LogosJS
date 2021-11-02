num = 2.2;
str = "String"
bool = true
n = null
u = undefined

// console.log(num)

// var v = 2;
let l = 3;
const PI = 3.14

// alert("fdsa");
// resultConfirm = confirm("Are you shure?")
// console.log(resultConfirm)

// userName = prompt("Enter name")
// console.log(userName)

// a = ["String", 22, false]

// for(key in a) {
//     console.log(a[key])
// }

// nnn = "Stirng" 
// console.log(isNaN(nnn))

st = "2"
// nn = parseInt(st)
// console.log("st \"2\" isNan " + isNaN(nn))

// nn = st - 0

// nn2 = 6
// st2 = 6 + ""

// console.log(nn)

// i = 1;
// i += 2;

// console.log(0 == false)
// console.log("" == 0)
// console.log("" == false)

// console.log(0 === false)
// console.log("" === 0)
// console.log("" === false)

// name1 = "Visa"
// name2 = "Vatyaffdsafsdafsda"

// console.log(name1 > name2)

// b = 5 > 3 ? "tr" : "fl";
// console.log(b)

// switch (b) {
//     case "true":
//     case "tr": console.log("TRUE"); break;
//     case "fl": console.log("FALSE"); break;
//     default: console.log("DEFAULT");
// }

a = [6,4,7,9,45,2,4,6]
console.log(Math.max(...a))
console.log(Math.min(...a))
console.log(Math.round(2.5))
console.log(Math.round((Math.random() * 100)))
console.log(Math.floor(2.9))
console.log(Math.ceil(2.1))


console.log(Math.abs(5))

a = {
    key1: "val1",
    key2: "val2",
    key3: 2,
    key4: true,
    arr: ["val1", "val2", 3, false],
    innerObj: {
        innKey1: "innVal1",
        innKey2: 2
    }
}

// ar = [
//     {
//         arr: [
//             {}, {}
//         ]
//     }, {}
// ]

console.log(a.innerObj.innKey1)

console.log("======================")
for(key in a){
    console.log(a[key])
}
console.log("======================")

// console.log(a["key1"])

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

person = new Person("Vasa", 22);
console.log(person);
console.log(person.getName());

person2 = {
    name: "Vitya",
    age: 33,
    getName: () => {
        console.log("getName")
    }
}

person2.getName()

let car = {}

car.weight = 1500
car.model = "BMW"
car.person = person

console.log(car)

delete car.weight;
console.log(car)

let car2 = car;
car.model = "Mercedes"

console.log(car)
console.log(car2)


name1 = "Vasa"
surName = name1 || " Surname"
console.log(surName)

try{
    throw new Error()
} catch(e) {
    console.log("Catched!!! " + e)
}

