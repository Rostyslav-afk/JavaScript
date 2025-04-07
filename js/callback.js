// const namee = function (a, b) { Тільки так працюєм!!!
//     return a + b;
// } ;
// console.log(namee(10, 5)); 
// const opperations = function(callback, a,b) {
//     return callback(a,b)
// }
// const fnAdd = function (a,b) {
//     return `Результат додавання числа ${a} + ${b} = ${a + b}`;
// }
// const fnMinus = function (a,b) {
//     return `Результат минусовання числа ${a} - ${b} = ${a - b}`;
// }
// const fnMultiply = function (a,b) {
//     return `Результат множання числа ${a} * ${b} = ${a * b}`;
// }
// const fnDivision = function (a,b) {
//     return `Результат дылення числа ${a} : ${b} = ${a / b}`;
// }
// console.log(opperations(fnAdd, 2, 2));
// console.log(opperations(fnMinus, 2, 2));
// console.log(opperations(fnDivision, 2, 2));
// console.log(opperations(fnMultiply, 2, 2));
const tel = ["06837347364", "06837342364", "06832467364", "0683734736423"];

const newmassiv = [1, 3, 4, 6, 4, 13, 15, 45];

const operation = function (callback, array) {
    return callback(array);
}

const editMassiv = function (array) {
    let message = ""
    for (let i = 0; i <= array.length; i += 1){
        
        if (array[i] > 11) {
            message = `Знайшли невірний номер телефону ${array[i]}`;
            
        }
        
    }
    return message
}
console.log(operation(editMassiv, tel));


const sumMassiv = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        // console.log(array[i]);
        sum += array[i];
    }
    
    return sum
}

console.log(operation(sumMassiv, newmassiv));
