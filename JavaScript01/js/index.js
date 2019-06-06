"use strict";

// // ЗАДАНИЕ 1
// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(price);
// price = 2000;

// console.log( '"Выбран "' + name + '", цена за штуку ' + price + ' кредитов"');

// // ЗАДАНИЕ 2

// const day = 17;
// const month = 10;
// const year = 2048;

// const date = day + '/' + month + '/' + year;
// console.log(date);
// console.log('"Доброе утро, сегодня ' + date + ', ' + 'за бортом отличная погода!"');

// // ЗАДАНИЕ 3

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// console.log(name + ' прибывает на отдых ' + date + ' в ' + roomType);

// // ЗАДАНИЕ 4
// const message = prompt('введите пароль доступа');
// const correctPassword = 'jqueris';
// if (message === correctPassword) {
//     alert('Доступ в секретный бункер разрешен!');
// } else if (message === null) {
//     alert('Вы нажали отмену');
// }
//  else {
//     alert('Неверный пароль! активирована защитная система!');
// }

// // ЗАДАНИЕ 5
// const total = 100;
// const ordered = Number(prompt());

// if (total < ordered) {
//     console.log('На складе не достаточно товаров!');
// } else if (total === ordered) {
// console.log('Вы забираете весть товар со склада!');
// } else if (total > ordered) {
//     console.log('Заказ оформлен, с Вами свяжется менеджер!');
// }

// // ЗАДАНИЕ 6

// const massege = prompt('Введите произвольное целое число');
// const asNumber = Number(massege); 4

// if(asNumber === Number.parseInt(asNumber)) {
// alert('Спасибо');
// } else if( massege === null) {
//     alert('пприходите еще!');
// }
//  else {
//     alert('Необходимо было ввести целое число!');
// }

// // ЗАДАНИЕ 7 НЕ СДЕЛАЛА, ЧЕТНЫЕ И НЕЧЕТНЫЕ ЧИСЛА

// // ЗАДАНИЕ 8 готово

// const one = 1;
// const two = 2;
// const tree = 3;
// const four = 4;
// const five = 5;

// const choose = prompt('Введите число от 1 до 5');
// const isValidInput = Number(choose);
// if(choose === null) {
//     alert('Очень жаль, приходите еще!!!');
// }

// switch(isValidInput) {
//     case one:
//         alert('Каталог хостелов');
//         break;

//         case two:
//         alert('Каталог бюджетных отелей');
//         break;

//         case tree:
//         alert('Каталог отелей ***');
//         break;

//         case four:
//         alert('Катало отелей ****');
//         break;

//         case five:
//         alert('Каталог отелей *****');
//         break;

// }

// // ЗАДАНИЕ 9 Готово
// const one = "Китай";
// const two = "Южная Америка";
// const tree = "Австралия";
// const four = "Индия";
// const five = "Ямайка";

// const onePrice = "100 кредитов";
// const twoPrice = "250 кредитов";
// const treePrice = "170 кредитов";
// const fourPrice = "80 кредитов";
// const fivePrice = "120 кредитов";

// const input = prompt("Введите страну доставки");

// switch (input) {
//   case "Китай":
//     console.log(`Доставка в ${one} будет стоить ${onePrice}`);
//     break;

//   case "Южная Америка":
//     console.log(`Доставка в ${two} будет стоить ${twoPrice}`);
//     break;

//   case "Австралия":
// console.log(`Доставка в ${tree} будет стоить ${treePrice}`);
//     break;

//   case "Индия":
//     console.log(`Доставка в ${four} будет стоить ${fourPrice}`);
//     break;

//     case 'Ямайка':
//         console.log(`Доставка в ${five} будет стоить ${fivePrice}`);
//         break;

//         default:
//             console.log('В Вашей стране доставка не доступна!');
// }

// // ЗАДАНИЕ 10 готово

// const one =1;
// const two = 2;
// const tree = 3;
// const fore = 4;
// const five = 5;

// const inputNumber = prompt("Enter  number from 1 till 5");
// const isInputNumber = Number(inputNumber);

// if (inputNumber === null) {
//   alert("wellcome next time");
// } else if (
//   isInputNumber < 1 ||
//   isInputNumber > 5 ||
//   Number.isNaN(isInputNumber)
// ) {
//   alert("not right!!");
// } else {
//   switch (isInputNumber) {
//     case one:
//       alert("Каталог хостелов");
//       break;

//     case two:
//       alert("Каталог бюджетных отелей");
//       break;

//     case tree:
//       alert("Каталог отелей ***");
//       break;

//     case fore:
//       alert("Катало отелей ****");
//       break;

//     case five:
//       alert("Каталог отелей *****");
//       break;
//   }
// }

// ДОМАШНЯЯ РАБОТА
// const adminLogin = "Anna";
// const adminPassword = 5555;

// const input = prompt("Введите логин"); 

// if (input === null) { 
//   alert("Отменено пользователем"); 
// } else if (input !== adminLogin) {
//   alert("Доступ запрещен, неверный логин!");
// } else if (input === adminLogin) { 
//   const validLogin = prompt("Введите пароль");
//   const isValidLogin = Number(validLogin);
 
//   if (validLogin === null) {
//     alert("Отменено пользователем");
//   } else if (isValidLogin === adminPassword) {
//     alert("Добро пожаловать!");
//   } else {
//     alert("Пароль введен не верно!");
//   }
// } 
 
const sharm = 15;   
const taba = 6;   
const hurgada = 25;

var userInput = prompt('Введите число необходимых мест');
const isValidInput = Number(userInput);
const validInput = userInput !== null && Number.parseInt(isValidInput);

if(userInput === null) { 
    alert('Нам очень жаль, приходите еще');
}  
if (isValidInput) { 
    var numberPercon; 
     
    switch (isValidInput) {  
        case sharm:
            numberPercon = isValidInput <= sharm;
            console.log('have sharm');
            break;   

            case taba:
                // console.log('taba have')
                namberPercon = isValidInput <= taba;
                break;

                case hurgada:
                    // console.log('hurgada have');
                    numberPercon = isValidInput <=hurgada;
                    break;
    } if(numberPercon >= isValidInput) {
    confirm(`есть место в группе ${numberPercon}, согласны?`);
    
    } if(numberPercon < isValidInput) {
        alert('Извините, столько мест ни в одной группе');
    } }
