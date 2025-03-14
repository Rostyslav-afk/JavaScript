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
const list = [30, 22, 100, 33, 50, 11, 44, 29, 17];
let min = list[0];
for (let i = 0; i < list.length; i += 1) { 
    // console.log(list[i]);
    if (min > list[i]){ // максимальне число знак <
        min = list[i]
   }
}

console.log(min);
