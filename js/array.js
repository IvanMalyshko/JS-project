const arr = [1, 22, 3, 45, 11, 12, 133];
// const a = arr.pop(); //удаление последнего элемента из массива
// console.log(a, arr);
//
// arr.push(15); //добавление эл-та в конец массива
// console.log(arr);
// // FOREACH
// arr.forEach(function (item, i, arr) {
//     console.log(`текущий элемент массива ${item}, индекс элемента ${i} из массива ${arr}`)
// })

//SPLIT - СОЗДАНИЕ МАССИВА ИЗ СТРОКИ
const str = 'яблоко, груша, тыква, арбуз';
const products = str.split(', ');
products.sort(); //сравнивает элементы как строки, но имеет возможность принять в себя функцию сортировки
console.log(products);


function compareNum(a, b) {
    return a - b
};

console.log(arr.sort(compareNum))

//JOIN - СОЗДАНИЕ СТРОКИ ИЗ МАССИВА
const colors = ['red', 'blue', 'black', 'orange'];
const strColors = colors.join('--');
console.log(strColors);