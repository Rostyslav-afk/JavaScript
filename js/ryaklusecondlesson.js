// length — властивість, зберігає довжину рядка
// toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
// indexOf() — поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
// includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
// str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.
// trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
// padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. Відступ застосовується з кінця/початку поточного рядка.

// const message = prompt("Your email:");
// if (message){
//     message.includes("@");
//     alert("Thank you!");
// } else{
//     alert("Your email incorect");
// }

// const a = "veazzerr";
// console.log(a.toLocaleUpperCase());
// const b = "HAHAHHAHAHHA";
// console.log(b.toLocaleLowerCase());

// const admin = "Admin";
// const isAdmin = prompt("Are you Admin or User?");
// const result = isAdmin.toLowerCase() === admin;
// console.log(result);

// const text = "Hello World!";
// console.log(text.indexOf("Hello"));
// const fruit = "Manzana, platano, mango, coco, naranja, Manzana";
// console.log(fruit.indexOf("naranja"));
// console.log(fruit.indexOf("Manzana", 49));

// const text = "Hello World!";
// console.log(text.includes("World!"));
// console.log(text.indexOf("World!") !== -1);

// const message = "Hi!I'm new and i don't like jutas.Are you good?";
// console.log(message.startsWith("Hi!"));
// console.log(message.endsWith("and"));

// const email = "pityxemail@com.ua";
// // console.log(email.endsWith("ru"));
// if(email){
//     email.endsWith("ru");
//     alert("Смахався з сайту");

// } else {
//     email.endsWith("ua");
//     alert("Наш живчик!");
// }

// const admin = "admin";
// const isAdmin = prompt("Are you Admin or User");
// console.log(admin === isAdmin.trim());

// const text = "89";
// console.log(text.padStart(4, "19"));

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quis ipsa? Facere aliquid blanditiis alias velit quis tempore! Sunt, temporibus eligendi aperiam minima beatae vel soluta quasi nam corrupti quod.";








