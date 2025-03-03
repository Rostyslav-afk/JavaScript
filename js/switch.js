// const age = 21;
// const type = (age >= 18) ? "parent": "child";
// console.log(type);


// пошук найбільшого числа
// створіть зміну num1 і призначте їй 5
// створіть зміну num2 і призначте їй 10
// перевірте яке з цих чисел більше і призначте зміній bigNumber num1 або num2

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }
// console.log(biggerNumber);

// const a = 2;
// const b = 3;
// const result = (a + b > 4) ? "Вище": "Нижче";
// console.log(result);


//Напишіть код що отримує число з input та:
// якщо число більше 1 виведіть повідомлення число більше 1 та виведіть число через шаблоний рядок на екран, якщо менше то  виведіть повідомлення число менше 1 та виведіть число через шаблоний рядок на екран.

// const whatNumber = Number(prompt("Введіть число"));
// const result = (whatNumber > 1) ? `Так ${whatNumber} більше за один`: `Ні число ${whatNumber} не більше за один`;
// console.log(result);

// let a = 5;
// if (true){
//    a = 10;
//   if (true){
//     let a = 25; 
//     console.log(a);
//   } 
// } 
// console.log(a);

// let cost;
// const subcription = "premium";
// switch(subcription){
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100;    
//         break;
//     case "premium":
//         cost = 500;
//         break;
//     default:
//         alert("Invalid subcription type")    
// }
// console.log(cost);


// 2. Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.
// const stars = Number(prompt("Скільки зірковий номер ви бажаєте?"));
// // if (stars === 1) {
// //     alert("До оплати 20$")
// // } else if (stars === 2) {
// //     alert("До оплати 30$")
// // } else if (stars === 3) {
// //     alert("До оплати 50$")
// // } else if (stars === 4) {
// //     alert("До оплати 70$")
// // } else if (stars === 5) {
// //     alert("До оплати 120$")
// // } else{
// //     alert("Такої кількості зірок немає")
// // }

// switch (stars) {
//     case 1:
//         alert("До оплати 20$")
//         break;
//     case 2:
//         alert("До оплати 30$")
//         break;
//     case 3:
//         alert("До оплати 50$")
//         break;
//     case 4:
//         alert("До оплати 70$")
//         break;
//     case 5:
//         alert("До оплати 120$")
//         break;
//     default:
//         alert("Такої кількості зірок немає")
// }
// 1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:
// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонить менеджер'.
// const message = Number(prompt("Виберіть тип доставки (1-3)"));
// switch (message) {
//     case 1:
//         alert("Ви зможете забрати товар завтра з 12:00 в нашому офісі")
//         break;
//     case 2:
//         alert("Кур'єр доставить замовлення завтра з 9:00 до 18:00")
//         break;
//     case 3:
//         alert("Посилка буде відправлена сьогодні")
//         break;
//     default:
//         alert("Вам передзвонить менеджер")
// }

// Змінна lang може приймати 4 значення: 'ua', 'en', 'es', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

const lang = prompt("Change your laungage ('ua', 'en', 'es', 'fr') ");
switch (lang) {
    case "ua":
        alert("Ваша мова змінена на Українську!")
        break;
    case "en":
            alert("Your launguage have changed to English!")
            break;    
    case "es":
        alert("¡Tu idioma cambio al Español!")        
        break;   
    case "fr":
        alert("Votre langue a été changée en Frances!")        
        break; 
    default:
        alert("Please select launguage!")      
}