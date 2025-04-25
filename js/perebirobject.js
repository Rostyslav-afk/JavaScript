// const user = {
//     name: "John",
//     age: 30,
//     friends: ["Mike", "Anna"],
//     location: {
//         country: "Ukraine",
//         city: "Kyiv",
//         address: "Shevchenka",
//         home: "1",
//     },
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!for of, for in можна писати const!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //Перевірка на внутрішній масив
// for (const key in user) {  //Перебираємо об'єкт!
//     if (Array.isArray(user[key])) {  // Перевіряєво чи значенням ключа є масив!
//         for (let name of user[key]) { // Перебираємо масив!
//             console.log(`Значення масиву ${key}: ${name}`);
//         }
//     }
// }

// //Перевірка на внутрішній масив і перебір його!
// for (let key in user) {
//     if (typeof (user[key] === "object" && user[key] !== null && !Array.isArray(user[key]))) {
//         for (let element in user[key]){
//             console.log(element);
//             console.log(user[key][element]);
//         }
//     }


// }

// const keys = Object.keys(user);// Отримаємо маисв ключів обєкта user
// console.log(keys);
// const valueUsers = Object.values(user); // Отримаєм масив значення обєкта
// console.log(valueUsers);
// const result = Object.entries(user); // Отримаєм масив масивів
// console.log(result);
//#1 завдання з дз

// const user = {
//     name: "Rostyslav",
//     age: 12,
//     hobby: "programing",
//     premium: true,
// }
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const key = Object.keys(user);
// console.log(key);

// for (let i of key) {
//     console.log(`${i} - ${user[i]}`);
// }


// Якщо ми передаємо значення однієї змінної в іншу змінну то в іншій змінній створюється копія значення, це називається присвоєння за значенням 

// let a = 5;
// let b = a;
// console.log(b === a);
// b = 10;  
// console.log(a);
// console.log(b);

// У випадку зі складними типами даних, якщо ми передаємо значення  однієї змінної в іншу змінну передається за посиланням оригінал цього обєкта

// const objA = {
//     x: 1,
//     y: 2,
//     z: 3,
// }
// const objB = objA;
// console.log(objB === objA);
// objB.x = 10;
// console.log(objA);
// console.log(objB);
// const e = {};
// const f = {};
// console.log(e === f); // не буде рівним бо міряє за значенням

// #2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// const information = {
//     id: 1233123,
//     name: "Developer",
//     status: "Fullstack",
//     wantsMoney: "6000$",
// }

// const countProps = function (obj) {
//     const key = Object.keys(obj);
//     // const value = Object.values(obj);
   
// };
// countProps()


// const namesMassiv = ["Vlad", "Nazar", "Mukola", "Lev", "Rostik", "David"];

// const copyNames = [...namesMassiv];
// console.log(copyNames);
// copyNames.push("Yura");
// console.log(copyNames);
// console.log(namesMassiv);

const number = Math.min(43,23,3,423,3,43);
console.log(number);
const masivNumber = [12, 32, 2, 43, 1];
console.log(Math.min(...masivNumber));
