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

// const number = Math.min(43,23,3,423,3,43);
// console.log(number);
// const masivNumber = [12, 32, 2, 43, 1];
// console.log(Math.min(...masivNumber));

// const hotel = {
//     name: "Hilton",
//     stars: 5,
//     street: "Shevchenka",
//     location: {
//         street: "Center",

//     },
// }
// // const {name = "hotel", stars = 0, street = "no info", full = "no info"} = hotel;
// // console.log(name, stars, street, full);
// const {name, stars, ...rest} = hotel;
// console.log(name);
// console.log(stars);
// console.log(rest);// ...rest лишаючі елементи перетоворює в окремий обєкт

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ["Borsh", "Zhyvchyk"],
//     extra: true,
// }
// const {
//     size: {
//         width,
//         height
//     },
//     items: [itemFirst, itemSecond], //додамо елменти до items
//     title = "Menu"
// } = options;

// console.log(title);
// console.log(width);
// console.log(height);
// console.log(itemFirst);
// console.log(itemSecond);

// const movie = {
//     title: 'The Shawshank Redemption',
//     director: {
//         name: 'Frank Darabont',
//         nationality: 'American'
//     },
//     actors: ['Tim Robbins', 'Morgan Freeman'],
//     release_year: 1994,
//     ratings: {
//         imdb: 9.3,
//         rotten_tomatoes: 90
//     }
// }

// const { title, director: { name, nationality }, actors: { a, b }, release_year, ratings: { imdb, rotten_tomatoes } } = movie;
// console.log(title, name, nationality, a, b, release_year, imdb, rotten_tomatoes);

// Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".
// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
// };

// const personInfo = function({ name, surname, age}){
//     return `Мене звати ${name} ${surname} та мій вік ${age} років`
// }

// console.log(personInfo(person));
// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.
const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
};
const calculateAverageGrade = function ({ name, surname, grades }) {
    let sum = 0;
    for (let i = 0; i < grades.length; i += 1) {
        sum += grades[i];
    }
    return `Імя та прізвище студента: ${name} ${surname}. Середній бал студента ${sum / grades.length}`
}
console.log(calculateAverageGrade(student));
const lala = document.querySelector("")





