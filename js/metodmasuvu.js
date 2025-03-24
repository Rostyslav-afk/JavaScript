// const students = ["Mukola", "Ya", "Lev", "Nazar", "Vlad Draga", "Vlad Karaim", "Yuriy Gorbunov"]
// console.log(students);
// students.push("Petruk") // метод додоає на кінець масиву
// console.log(students);
// students.unshift("Zoryana") // додає на початок масиву
// console.log(students);
// students.shift("") // видаляє перший елемент з масиву
// console.log(students);
// students.pop("") // Видаляє останій елемент з масиву
// console.log(students);
// const newstudents = students.slice(0, 5);// Вирізає елементи масиву від "start" до "end (не включно)"
// console.log(newstudents);
// // ------------- splice змінює оригінальний масив ,якщо нам не треба не треба зміннювати оригінальний масив нам з початку зробити копію за допомогою методу slice і в ній вже працювати ------------
// const numbers = [1, 3, 5, 7, 9, 11, 13, 213]; // оригінальний масив
// console.log(`Оригінальний масив: ${numbers}`);
// const newArray = numbers.slice();
// console.log(`Копія масиву numbers: ${numbers}`);
// // видалення елементів масиву
// // const deleteArray = newArray.splice(0, 5);
// // console.log(`Масив елементів ,який видаленний: ${deleteArray}`);
// // додавання елементів масиву
// newArray.splice(2, 0, "Hello World!") // першим аргументом задаєм з , якого індексу хочемо вставити .Другим аргументом чи хочимо ми видалити елмент(0 не видаляємо) і скільки ми хочемо видалити елементів. Та 3 аргументом передаємо ,що саме ми хочемо вставити.
// console.log(newArray);

// //метод який обєднує масиви в один
// const numberss = [1, 3, 5, 7, 9, 11, 13, 213];
// const students = ["Rostyslav", "Petro"]
// const languages = ["C", "C++", "Java", "Java Script"];
// const ollArray = numberss.concat(students, languages)
// console.log(ollArray);


// Створіть масив фруктів, для якого:
// 1) За допомогою методів масиву видаліть спочатку та скінця по фрукту,
// на їхнє місце додати нові фрукти.
//  2) Видалити 3 елемент, та на його місце вставити декілька інших фруктів використовуючи метод splice;

// const fruits = ["apple", "banana", "orange", "watermelon"]
// console.log(fruits);
// fruits.shift(0)
// fruits.pop()
// fruits.unshift("kiwi")
// fruits.push("mango")
// fruits.splice(2, 1, "orange", "uvas")
// console.log(fruits);


