// console.log(Boolean(0))
//!!!!!!!!!!!!! 6 значень ,які приводять до false: 0,порожній рядок"",null,undefined,none,false.!!!!!!!!!!!!!!!!!!!


//логічний оператор i позначається оператором && і повертає:
//якщо всі значення true повертає останнє значення 
//якщо зустрічає false то на ньому і приривається\

// console.log(11 && "abc");
// console.log(0 && 11);
// console.log(123 && null);
// console.log("Мені 18 років" && "У мене є закордноий паспорт" && "Я можу вийхати за кордон");
// console.log("Мені 18 років" && NaN && "Я можу вийхати за кордон");

// alert("підтвердіть будь ласка");
// const a = alert("Дякую");
// console.log(a);

//Логічний оператор or позначається оператором || і повертає перше true , яке воно і зустрічає воно його і повертає false ,якщо не зустріло true 
// console.log(0 || 15);
// console.log(15 || 0);
// console.log(123 || false || "" || undefined || 0 || null || "yes");

// Логічний оператор не позначається знаком ! і перетворює значення в булевому вигляді на протилежне
// console.log(!NaN || false || "" || undefined || 0 || null || "yes");
// console.log(0 || 20 && !NaN  );
// console.log(NaN || "ahhshs" && false || "" || 0 || "hi" || 0 && undefined || false);

// const message = "  HaHaHaHa  ";
// console.log(message.trim().toLowerCase());

// // Напиши скрипт який перевіряє можливість розпочати чат з користувачем. Для цього користувач має бути:
// // другом
// // онлайн
// // без режиму не турбувати
 const isOnline = false;
 const isFriend = true;
 const isDisturb = false;

 console.log(`${!isOnline && isFriend && !isDisturb}`);










