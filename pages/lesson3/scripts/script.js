// let ob = {
//     a: 1,
//     b: 2
// }
// let arr = ["a", "b", ob]

// console.log(Object.keys(arr))
// console.log(arr[2].b)

// arr[3] = true
// arr.push("Stack value")

// console.log(arr)

// console.log( arr.pop() )
// console.log(arr)

// arr.unshift("Queue element", {ok1: "ov1", ok2: "ov2"})
// console.log(arr)
// console.log( arr.shift() )
// console.log(arr)

// arr[100] = false;
// console.log(arr)
// console.log(arr[95])

// arr2 = ["e0", "e1"]
// console.log(arr2[-1])

//=============================================================

arr = new Array(2, 5);
console.log(arr)

arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


console.log(arr[1][2])

str = "val1, val2, val3"
strArr = str.split(", ")
console.log(strArr)
console.log(strArr.join(""))

console.log(new Array(10).join("&"))

delete strArr[0]
console.log(strArr)

arr = [1,2,3,4,5]

console.log(arr.splice(-2, 0, "a", "b", "c", "d"))
console.log(arr)

console.log(arr.slice(1,3))
console.log(arr)

console.log(arr.slice(-3))
console.log(arr)

console.log(arr.slice())
console.log(arr)
