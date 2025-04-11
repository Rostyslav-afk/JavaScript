// const namee = function (a, b) { Тільки так працюєм!!!
//     return a + b;
// } ;
// console.log(namee(10, 5)); 
// const opperations = function(callback, a,b) {
//     return callback(a,b)
// }
// const fnAdd = function (a,b) {
//     return `Результат додавання числа ${a} + ${b} = ${a + b}`;
// }
// const fnMinus = function (a,b) {
//     return `Результат минусовання числа ${a} - ${b} = ${a - b}`;
// }
// const fnMultiply = function (a,b) {
//     return `Результат множання числа ${a} * ${b} = ${a * b}`;
// }
// const fnDivision = function (a,b) {
//     return `Результат дылення числа ${a} : ${b} = ${a / b}`;
// }
// console.log(opperations(fnAdd, 2, 2));
// console.log(opperations(fnMinus, 2, 2));
// console.log(opperations(fnDivision, 2, 2));
// console.log(opperations(fnMultiply, 2, 2));
// const tel = ["06837347364", "06837342364", "06832467364", "0683734736423"];

// const newmassiv = [1, 3, 4, 6, 4, 13, 15, 45];

// const operation = function (callback, array) {
//     return callback(array);
// }

// const editMassiv = function (array) {
//     let message = ""
//     for (let i = 0; i <= array.length; i += 1){

//         if (array[i] > 11) {
//             message = `Знайшли невірний номер телефону ${array[i]}`;

//         }

//     }
//     return message
// }
// console.log(operation(editMassiv, tel));


// const sumMassiv = function (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         // console.log(array[i]);
//         sum += array[i];
//     }

//     return sum
// }

// console.log(operation(sumMassiv, newmassiv));
// console.log(arr(1, 2)); // Називається хостинг
// function arr(a, b) {
//     return a + b;
// }

// const arrayFunction = (a, b) => { // СТРІЛКОВА ФУНКЦІЯ
//     const result = a+b ;
//     return result;
// };
// console.log(arrayFunction(1,2));

// const add = (c, d) => c + d ;
// console.log(add(8, 9));

// const message = str => str;
// console.log(message("Hello"));


// стек викликів
// function greet() {
//   console.log("Привіт!");
//   askName();
// }

// function askName() {
//   console.log("Як тебе звати?");
//   sayBye();
// }

// function sayBye() {
//   console.log("Бувай!");
// }

// greet();


// Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”.

// const hello1 = (a) => a;
// console.log(hello1("LLALALLA"));

// Напишіть стрілкову функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).

// const hello2 = (name) => console.log(`Привіт ${name}`);
// console.log(hello2("Васильку"));

//Напишіть стрілкову функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.
const mull = (m, n) => `${m * n}, ${m - n}, ${m + n}`
console.log(mull(10, 5));

