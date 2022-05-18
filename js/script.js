// // // // "use strict";
// // // //
// // // // console.log(1);
// // // // let number = 5;
// // // // const leftBorderWidth = 1; //camelcase
// // // //
// // // // number = 10
// // // // console.log(number);
// // // // console.log(leftBorderWidth);
// // // // const obj = {
// // // //     a:5
// // // // };
// // // // obj.a = 10;
// // // // console.log(obj);
// // // // {
// // // //     let name = 'Ivan'
// // // //     const age = 21
// // // //     console.log(age);
// // // // }
// // // const obj = {
// // //     name: 'Ivan',
// // //     age:31,
// // //     isMarried: true
// // // }
// // // console.log(obj.age) //=> 31
// // // //массивы => часный случай обьекта хранящий элементы по порядку
// // // let arr = ['Ivan', 'red.jpg', 21, {}, [], 5] //=> может хранить в себе любые типы данных
// // // console.log(arr);
// // // const name = prompt('How your name?')
// // // alert(`Hello ${name}`)
// //
// // let incr = 10,
// //     derc = 10;
// //
// //
// // console.log(incr);
// // console.log(derc);
// //
// // // ++incr; //префикс форма
// // // --derc;
// // console.log(++incr);
// // console.log(--derc);
// // if (3 * 3 == 9) {
// //     console.log("vse verno")
// // } else {
// //     console.log('eto erunda')
// }f
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j =1; j < i; j++){
        result += '*';
    }
    result += '\n';
    console.log(result)
};
