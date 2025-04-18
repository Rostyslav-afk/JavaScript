// const name = "Vrunka"
// const hotel = {
//     name: name,
//     stars: 5,
//     capacity: 100,

// }; // об'єкт

// delete hotel.name; // Видаляти

// hotel.floors = 10 // Додавання

// hotel.location = {
//     city: "Ivano-Frankivsk",
//     street: "Pasichna",
//     home: 12
// } // Додавання ще одного під oб'єкта

// console.log(hotel.floors); // Немає властивості, повертає undefined

// console.log(hotel);

// Присвоїти змінній apartment об'єкт, який описує квартиру з
// наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr - опис, значення "Spacious apartment in the city center";
//rating - рейтинг, значення 4;
// //price - ціна, значення 2153;
// //tags - метаінформація, масив ["premium", "promoted", "top"].


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }

// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// // з інформацією про власника.Додай йому наступні властивості:
// //name - ім'я власника, значення "Henry";
// //phone - телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.com".

// apartment.owner = {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
// }

// // Доповни код, присвоївши оголошеним змінним вирази звернення
// // до відповідних властивостей об'єкта apartment.
// //aptRating - рейтинг;
// //aptDescr - опис;
// //aptPrice - ціна;
// //aptTags - теги.
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags= apartment.tags;

// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// // властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1]; 
// console.log(lastTag);

// const user = {
//     name: "Rostyslav",
//     age: 12,
//     friends: ["Danya", "Illya", "Mykola", "Tumofiy", "Rostik", "Misha"],
//     email: "goiteensschool@gmail.com",
//     password: "qwerty",
//     showName() { // Новий синтаксис(Тільки так писати)!!
//         console.log(this.name);
//     },
//     showFriends() {
//         console.log(`Кількість друзів у ${this.name} складає з ${this.friends.length} друзів`);  
//     },
//     addFriend(newFriend) {
//         if (this.friends.length < 10) {
//             this.friends.push(newFriend);
//         } else {
//             console.log("База переповнена");
//         }
//     },

// }
// console.log(user.showName());
// console.log(user.showFriends());
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));
// console.log(user.addFriend("Vlad D."));


// 1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount = {
    ownerName: "Ростік Арбітражник",
    accountNumber: "UA292032",
    balance: 1000000,
    deposit(money) {
        this.balance += money;
        return alert(`Ваш баланс поповнено на ${money}$`)
    },
    withdraw(money) {
        if (money > this.balance) {
            alert(`Недостатньо коштів!У вас на рахунку ${this.balance}$`)
        } else {
            alert(`Операція пройшла успішно!З рахунку знято: ${money}$`)
        }
    },
}
if (confirm("Бажаєте поповнити рахунок?")) {
    const money = Number(prompt("Введіть суму для поповнення"));
    if (!isNaN(money) && money > 0) {
        bankAccount.deposit(money);
    } else {
        alert("Невірні дані!");
    }
}
if (confirm("Бажаєте зняти гроші?")){
    const money = Number(prompt("Введіть суму для виведення"));
    if(!isNaN(money) && money > 0){
        bankAccount.withdraw(money);
    } else{
        alert("Недостатньо грошей на рахунку.");
    }
}