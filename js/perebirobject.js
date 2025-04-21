const user = {
    name: "John",
    age: 30,
    friends: ["Mike", "Anna"],
    location: {
        country: "Ukraine",
        city: "Kyiv",
        address: "Shevchenka",
        home: "1",
    },
}
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

const keys = Object.keys(user);// Отримаємо маисв ключів обєкта user
console.log(keys);
const valueUsers = Object.values(user); // Отримаєм масив значення обєкта
console.log(valueUsers);
const result = Object.entries(user); // Отримаєм масив масивів
console.log(result);
