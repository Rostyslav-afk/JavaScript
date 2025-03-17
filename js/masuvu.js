// масиви - array

const arr = ["Rostyslav", "Vlad", "Mukola", "Lev", "Vlad Draga"]
// console.log(arr.length -1);
// console.log(arr[arr.length -1]);
// arr[4] = "Юрій Горбунов";
// arr[5] = "Vlad Draga";
// console.log(arr);
// const user = arr[0];
// console.log(user);
// arr[0] = "Юра"
// console.log(arr);
// console.log(typeof(arr));

// 4 завдання
// for (let i = 0; i < arr.length; i += 1){
//     console.log(`Індекс ${i}, значення ${arr[i]}`);

// }

//напиши скрипт який порахує загальну суму усіх парних чисел.
//  const listNumber = [1, 4, 5, 9, 12, 18, 3, 7, 2];
// let sum = 0;
// for (let i = 0; i < listNumber.length; i += 1) {
//     if (listNumber[i] % 2 === 0 ){
//         sum += listNumber[i];
//     } 
//     console.log(sum);
// }

//напиши скрипт пошуку самого маленького числа в масиві
// const list = [30, 22, 100, 33, 50, 11, 44, 29, 17];
// let min = list[0];
// for (let i = 0; i < list.length; i += 1) { 
//     // console.log(list[i]);
//     if (min > list[i]){ // максимальне число знак <
//         min = list[i]
//    }
// }

// console.log(min);


// const arrr = [
//     [1, 4, 6, 9],
//     [2, 5, 7, 8],
//     [3, 7, 9, 1]
// ]
// console.log(arrr[1][3]);


//напиши скрипт пошуку самого маленького числа в масиві
//  const list = [30, 22, 100, 33, 50, 11, 44, 29, 17]

// for (let number of list) {
//     console.log(number);
//     if (number > list.length) {
//         console.log(number);

//     }
// }

//напиши скрипт який порахує загальну суму сисел двох масивів

// const list1 = [2, 4, 8, 9, 3];
// const list2 = [1, 3, 5, 7, 9];
// let sum = 0;
// for (let i = 0; i < list1.length; i+=1){
//     sum += list1[i];
// }

// for (let i = 0; i < list2.length; i+=1){
//     sum += list2[i];
// }
// console.log(sum);

// const list1 = [2, 4, 8, 9, 3];
// const list2 = [1, 3, 5, 7, 9];
// let sum = 0;
// for (let num of list1) {
//     sum += num;
// }
// for (let num of list2) {
//     sum += num;
// }
// console.log(sum);

//напиши скрипт пошуку логіна, якщо логіна немає вивести вовідомлення "користувач [логін] не знайдено", якщо знайшли [логін] вивести вовідомлення "користувач [логін] знайдено"
// for of


// const listLogin = ["qwerty", "login123", "asdfg321"];
// const userLogin = prompt("введіть логін").toLowerCase();
// let message = "Користувач, ваш логін не знайдено!";

// for (let login of listLogin) {
//     if (login === userLogin) {
//         message = `Користувач ${login} знайдено!"`
//         break;
//     }
// }

// console.log(message);


// const listLogin = ["qwerty", "login123", "asdfg321"];
// const userLogin = prompt("введіть логін").toLowerCase();

// for (let login of listLogin) {
//     const message = login === userLogin? `Користувач ${userLogin} знайдено!"` : `Користувач ${userLogin} не знайдено!`;
//     alert(message);
//     break;
// }


//напиши скрипт пошуку самого маленького числа в масиві
// const list = [30, 22, 100, 33, 50, 11, 44, 29, 17];
// let min = list[0];
// for (let num of list) {
//     if (min > num){
//         min = num
//     }
// }

// console.log(min);

// через індекс елемента додати в кінець масиву нове значення число 22 , вивести кожне значення елементу масива в консоль

// const list = [30, 22, 100, 33, 50, 11, 44, 29, 17];
// for (let num of list) {
//     list[9] = 22;
// }

// console.log(list);


//вивести тип і значення кожгого елементу в масиві
 const array = [20, "qwerty", true, undefined, null];
for (let el of array){
    console.log(typeof(el));
    
}