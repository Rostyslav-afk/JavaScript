"use st"
// // Function declaration 
// // function add() {
// //     // Тіло функції
// //     console.log("Привіт,Ростислав");
// //     return 
// // }
// // add()

// // Функціональний вираз
// // const addNumbers = function () {

// // }

// // // Функціональний вираз - стрілкова функція

// // const addNumberss =  () => {

// // }

// function addtwoNumbers(a, b) {
//     console.log(a + b);
// }
// addtwoNumbers(2, 7)
// addtwoNumbers(5, 10)
// addtwoNumbers("Hello", "Hi")
// addtwoNumbers("When", "undefined")
// function userPerson(name, age) {
//     name = prompt("Яке ваше ім'я?")
//     age = Number(prompt("Скільки вам років?"))
//     const message = `Мене звати ${name} та мені ${age} років`
//     return console.log(message);
// }
// userPerson()


// function convertedText (text) {
//     console.log(text.toUpperCase());
//     return text.toUpperCase()
// }
// convertedText("Lorem ")


// c дефолтне значення  
// function addNumbers(a, b, c=50) { // a та б це параметри функції

//     return a + b + c
// }
// console.log(addNumbers(20, 30)); // аргументи


function a() {
    console.log(arguments);
    const b = Array.from(arguments) // Array.from(name) перетворює в нормальний масив 
    console.log(b);
    let sum = 1;
    
    for (let i = 0; i < arguments.length; i += 1) {
        sum *= arguments[i]
    }
    return sum
}
console.log(a(5, 3, 12, 13, 200));
console.log(a(2, 3, 4, 5, 6, 7, 88, 99));


