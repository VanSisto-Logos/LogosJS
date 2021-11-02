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

