// Назва масиву. Метод(()=>{})
const friends = ["Rostyslav", "Vlad", "Mukola", "Vlad Draga", "Lev"]
// for (let i of arr){
//     console.log(i);
// }

//Цей метод forEach() перебирає масив, але нічого не повертає 
// friends.forEach((friend, idx, arr) => {
//     console.log(`Друг ${friend} під індексом ${idx} в масиві ${arr}`);
// });


//ЧИСТА ФУНКЦІІЯ
// const pureMultiply = (array, value) => {
//     const result = [];


//     for (let i = 0; i < array.length; i += 1) {
//         result.push(array[i] * value)
//     }

//     return result
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = pureMultiply(numbers, 2)

// console.log(numbers);

// console.log(doubleNumbers);

//Метод map() перебирає масив , не змінює оригінальний масив, повертає новий масив, в якому буде колекція данних!
const result = friends.map((friend) => friend);
console.log(result); // Копія
console.log(friends);
//filter() Може повертати колекцію данних!
const num = [1,2,3,4,5,6,7,8,9,10];
const filterArr = num.filter((item) => item > 5)
console.log(filterArr);

const filterArrSecond = num.find((item) => item === 5)
console.log(filterArrSecond);

