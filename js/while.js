//СТРУКТУРА FOR
// for (initialization; condition; post-expression; ) {
//     // statements
// }
// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }
// const message = "I love JavaScript!";
// // const result = message[message.length - 1];
// // console.log(result);
// for (let i = 0; i < message.length - 1; i += 1) {
//     console.log(message[i]);
    
// }

//напиши скрипт, який підрахує загальну зарплату працівників
// кількість працівників зберігається у зміній emplois
// зарплата кожного працівник, це випадкове число від 500 до 5000
// записати загальну сумму в зміну totalSalary та вивести у консоль.
//

//  let totalSalary = 0;
//  const employers = 10;
//  const minSalary = 500;
//  const maxSalary = 5000;

//  for (let i = 0; i <= employers; i += 1 ){
//     let result = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     totalSalary += result;
//     console.log(`Зарплата працівника ${result} $ `);
    
//  }

//  console.log(`Загальна сума всіх працівників ${totalSalary} $`);

// напиши скрипт який підрахує сумму всіх парних чисел, які входять в діапазон між 0 та 50
// for (let i = 2; i <= 20; i += 2) {
//     console.log(`Парні числа ${i}`);
    
// }

//  for (let i = 2; i <= 20; i += 2) {
//      if (i % 2 === 1) {
//         continue;
//      }
//     console.log(i);  
//  }

// for (let i = 0; i <= 10; i++){
//     if (i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

// Завдання: Знайди суму чисел від 1 до 5.
// let total = 0;
// for (let i = 0; i <= 5; i++){
//     total += i;
//     console.log(`Відповідь: ${total}`);
// }

// Завдання: Виведи таблицю множення для числа 3.
// for (let i = 0; i <= 10; i++) {
//     console.log(`3 × ${i} = ${3 * i}`);
// }

// Завдання: Виведи таблицю множення для числа 3.

// let i = 0;

// while (i <= 9) {
//     i++;
//     console.log(`3 × ${i} = ${3 * i}`);
// }

//Завдання: Виведи парні числа від 2 до 10.
// let i = 0;
//  while (i <= 10) {
//     i += 1;
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
    
//  }

//Завдання: Запитуй у користувача число, поки він не введе більше 10.
// let numberr = 0;
// while (numberr <= 10) {
//    numberr = Number(prompt("Введіть число більше за 10"))
// }
// console.log(numberr);

//Завдання: Запитуй у користувача пароль, поки він не введе "1234".
let password;
do {
    password = prompt("Введіть пароль")
} while (password !== "1234")
    alert("Пароль вірний")

