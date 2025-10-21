// 4/13   10.3. Логический тип и ветвление 

// Задание 1

/* let a = prompt ("введите число чёт не чёт")

let b = +a

if (b % 2) {
    console.log ( "не чёт" )
} else if ( b / 2 ) {
    console.log ( "чёт" )
} else if (Number.isNaN(b)) {
    console.log ( "NaN" )
} else {
    console.log ( "Упс, кажется, вы ошиблись" )
}*/

// 4/13   10.3. Логический тип и ветвление 

// Задание 2

/*let x = "lkfgld,"

let a = typeof x

switch (a) {
    case "number": {
        console.log("x - Number")
        break;
    }
    case "string": {
        console.log("x - String")
        break;
    }
    case "boolean": {
        console.log("x - Boolean")
        break;
    }
    default: {
        console.log("Тип x не определён")
    }
}*/

// задание 3
/*let str = "hello"

let substr = str.split("")
let strRevers = substr.reverse()
let stringRevers = strRevers.join("")

console.log (stringRevers)*/

// Задание 4

/*function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(101));*/


// Задание 5

/*let arr = [1, 31, 23, "dsadad"]
let arrs = arr.length

console.log (arrs)

arr.forEach((a) => {
    console.log(a)
})*/

// Задача 6

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];

// let theSame = true;
// for (let i = 0; i < arr.length - 1; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         if (typeof(arr[i]) !== typeof(arr[j])){
//             theSame = false;
//         }
//     }
// }
// if (theSame) {
//     console.log("array is the same");
// } else {
//     console.log("array is not the same");
// }

// Задание 7

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
// let countEven = 0;
// let countOdd = 0;
// let countOther = 0;

// for (let i = 0; i < arr.length; i++){
//     if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
//         countOther++;
//     } else {
//         if (arr[i] % 2 === 0) {
//             countEven++;
//         } else {
//             countOdd++;
//         }
//     }
// }

// console.log("Even is " + countEven);
// console.log("Odd is " + countOdd);
// console.log("Other is " + countOther);

// задание 8
// let users = new Map();
// users.set("student 1", "grade A");
// users.set("student 2", "grade B");
// users.set("student 3", "grade A");
// users.set("student 4", "grade B");
// users.set("student 5", "grade A");
// users.set("student 6", "grade C");
// users.set("student 7", "grade A");

// for (let user of users.keys()){
//     console.log(user + " is " + users.get(user));
// }