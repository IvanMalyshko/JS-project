// //СОЗДАНИЕ КОПИИ ЛЮБОГО ОБЪЕКТА SHALLOW COPY
function copy(mainObj){
        const objCopy = {};
        for (let key in mainObj){
            objCopy[key] = mainObj[key];
        }
        return objCopy;
}

//Object.assign() соединение 2 объектов
const numbers = {
    a: 1,
    b: 2,
    c: {
        x: 3,
        y: 4,
    }
}
const add = {
    d: 5,
    f: 6,
}
// console.log(Object.assign(numbers, add));// метод assign возвращает новый независимый объект

const clone = Object.assign({}, add); //создаеться новый объект на основе add
const clone2 = Object.assign({}, numbers);
clone2.c.x = 11; //ВЛОЖЕННЫЕ ОБЪЕКТЫ ПРИ ТАКОМ КОПИРОВАНИИ ОСТАЮТСЯ ЗАВИСИМЫМИ
clone2.a = 1111;
console.log(clone2);
console.log(numbers);

//создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

//SPREAD ОПЕРАТОР - ИСПОЛЬЗУЕТСЯ ДЛЯ РАЗВОРАЧИВАНИЯ ОБЪЕКТА ПОЛУЧАЯ НА ВЫХОДЕ НАБОР ДАННЫХ
const video = ['youtube', 'netflix', 'rutuby', [1, 2, 3, 4]],
    blog = ['wordpress', 'livejournal', 'bloger'],
    internet = [...video, ...blog, 'vk', 'instagramm'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

const num = [2, 5, 7];
log(...num); //SPREAD ОПЕРАТОР <<...объект>>


