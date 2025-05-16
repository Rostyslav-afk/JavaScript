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
// const result = friends.map((friend) => friend);
// console.log(result); // Копія
// console.log(friends);
// //filter() Може повертати колекцію данних!
// const num = [1,2,3,4,5,6,7,8,9,10];
// const filterArr = num.filter((item) => item > 5)
// console.log(filterArr);

// const filterArrSecond = num.find((item) => item === 5)
// console.log(filterArrSecond);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1230, 140, 123, 31];
// // const newArray = [];
// // for (let i = 0; i < num.length; i += 1) {
// //     if (num[i] > 20) {
// //         continue;
// //     }
// //     // console.log(num[i]);
// //     newArray.push(num[i])
// // }
// // console.log(newArray);

// // num.forEach((item) => console.log(item))
// const newArray = num.map((number) => {
//     console.log(number);
// });


// const pets = [
//     {
//         id: "1",
//         name: "Барсик",
//         type: "кіт",
//         color: "сірий",
//         age: 2,
//         weight: 4.5,
//         isAdopted: true,
//         favoriteFoods: ["риба", "молоко"],
//     },
//     {
//         id: "2",
//         name: "Бім",
//         type: "пес",
//         color: "чорний",
//         age: 5,
//         weight: 12,
//         isAdopted: false,
//         favoriteFoods: ["кістка", "м’ясо"],
//     },
//     {
//         id: "3",
//         name: "Кузя",
//         type: "хом’як",
//         color: "білий",
//         age: 1,
//         weight: 0.2,
//         isAdopted: true,
//         favoriteFoods: ["зерно", "морква"],
//     },
//     {
//         id: "4",
//         name: "Лола",
//         type: "папуга",
//         color: "зелений",
//         age: 3,
//         weight: 0.3,
//         isAdopted: false,
//         favoriteFoods: ["яблуко", "зерно"],
//     },
// ];

// Завдання 1:
// Отримати масив усіх імен об'єктів (ключ name)

// const getPetNames = (pets) => pets.map((pet) => pet.name);

// console.log(getPetNames(pets));

// Завдання 2:
// Знайти всіх тварин певного типу (наприклад, "кіт").
// const getPetsByType = (pets, type) => {
//     const result = pets.filter((pet) => {
//         return pet.type === type;
//     });
//     return result;
// }

// console.log(getPetsByType(pets, "кіт"));
// const getPetsByType = (pets, type) => pets.filter((pet) => pet.type === type)


// console.log(getPetsByType(pets, "кіт"));

// Отримати імена всіх тварин, які вже знайдені в родину (isAdopted === true).
// const getAdoptedPetNames = (pets) => pets.filter((pet) => pet.isAdopted);
// console.log(getAdoptedPetNames(pets));


// const sortedPetsArray = (pets) => pets.sort((a, b) => b.weight - a.weight); //сортує від найбільного до найменшого.Сортування, якщо значенням ключа є число.

// console.log(sortedPetsArray(pets));

// const sortedPetsName = (pets) => pets.sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortedPetsName(pets));

// const reduceArray = (pets) => pets.reduce((acc, value) => acc += value.weight, 0);
// console.log(reduceArray(pets));


// const addWeight = (pets) => {
//     let sum = 0;
//     pets.forEach((pet) => {
//         console.log(pet.weight);
//         sum += pet.weight;
//     })
//     return sum;
// };
// console.log(addWeight(pets));
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const reduceTweets = (tweets) => tweets.reduce((acc, value) => {
//     acc.push(value.tags);
//     return acc
// }, []);
// console.log(reduceTweets(tweets));

// const flateTweets = (tweets) => tweets.flatMap(value => value.tags);
// console.log(flateTweets(tweets));

const reduceTags = (tweets) => tweets.reduce((acc, value) => {
    //console.log(acc); порожній масив
    //console.log(value); обєкт
    value.tags.forEach(tag => { // по ключу валюе тег перебираємо масив
        // console.log(tag); отримуєом кожен елемент масиву
        if (!acc.includes(tag)) { // якшо порожньому масиву немає нашого асс нема елемента то додай 
            acc.push(tag)
        }
    });
    return acc;
}, []);
console.log(reduceTags(tweets));
