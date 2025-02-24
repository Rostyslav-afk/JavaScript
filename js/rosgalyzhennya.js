// let cont;
// const subscribe = true;
// if (subscribe === true){
//     alert("Thanks")
// }else{
//     alert("Pls subscribe")
// }

// if (5 > 3){
//     console.log("Yes");

// }else{
//     console.log("No");

// }

// const check = "hhahaha" && "sigma" && "hi" && "hello";
// if (check !== true){
//     alert("Yeah,you right")
// }else{
//     alert("Pls buy tickets")
// }

// let cost;
// const defaultValue = 0;
// const subscribtion = "a";

// if (subscribtion === "free") {
//     cost = 0;
// } else if (subscribtion === "pro") {
//     cost = 100;
// } else if (subscribtion === "premium") {
//     cost = 500;
// } else {
//     console.log("Please select plan");
//     cost = defaultValue;
// }
// console.log(cost);

// const result = (5 < 3) ? "yes": "no";
// console.log(result);
// (умова) ? true: false

// const valueFirst = 50;
// const valueSecond = 25;
// const result = (valueFirst > valueSecond) ? console.log(`Так значення зміної ${valueFirst} більше ніж значення ${valueSecond}`) : console.log(`Ні це не правда`);
// ;


//2) Створіть зміну і присвойте їй число 10
// сторіть змінну і присвойте їй число 5
// перевірте якщо сума цих 2х чисел більша за 15 виведіть повідомлення на єкран сума більша за 15, якщо менша то і у повідомленні вкажіть це.

// const firstNumber = 10;
// const secondNumber = 5;
// const result = 10 + 5 ;
// const check = (result >= 15) ? alert("Так сума цих двох чисел більша за 15"): alert("Ні це неправда");
// console.log(check);

//1) Створіть змінну age яка буде запитувати у користувача його вік
// Створіть змінну isAdmin, яка буде запитувати користувача, чи він admin з підтверженням так або ні.
// Створіть змінну allowedAge і присвойте їй значення 18
// Створіть змінну enterPassword яка буде просити у користувача ввести пароль
// Створіть змінну password і присвойте їй значення рядок qwerty
// Перевірте у користувача чи вік його більший за 18 років, чи він адмін та при введенні пароля обріжте можливі    пробіли та приведіть до нижнього регістру, та виведіть на екран повідомлення "Вітаю, ви можете увійти у систему"
// якщо хоч одне значення хибне виведіть на екран повідомлення "Ви вказали невірні данні"

// const age = Number(prompt("Введіть ваш вік"));
// const isAdmin = prompt("Ви адмін?")
// const allowedAge = 18;
// const enterPassword = prompt("Введіть пароль");
// const password = "qwerty"; 
// if (age > allowedAge && isAdmin && enterPassword.trim().toLowerCase() === password) {
//     alert("Вітаю, ви можете увійти у систему")
// } else {
//     alert("Ви вказали невірні данні")
// }

//2) Створіть зміну і присвойте їй число 10
// сторіть змінну і присвойте їй число 5
// перевірте якщо сума цих 2х чисел більша за 15 виведіть повідомлення на єкран сума більша за 15, якщо менша то і у повідомленні вкажіть це.

// 3) Створити зміну і присвойте їй рядок "I love JavaScript". 
//перевірити, чи введений текст містить слово "JavaScript"
//якщо так, перевірити чи слово "JavaScript" стоїть на початку рядка чи в кінці
//  якщо так, то виводити повідомлення "Текст містить слово JavaScript" і воно знаходиться в ....
//  якщо ні — "Текст не містить слово JavaScript".
// якщо, текст містить слово JavaScript, але воно не на початку і не в кінці виведіть повідомлення.

const love = "I love JavaScript";
const lunn = "JavaScript";
if (love.includes(lunn)) {
    if (love.startsWith(lunn)) {
        console.log("Слово JavaScript знаходитьсяна початку");
    } else if (love.endsWith(lunn)) {
        console.log("Слово JavaScript знаходитьсяна в кінці");
    }
} else {
    console.log("Текст не містить слово JavaScript");

}



