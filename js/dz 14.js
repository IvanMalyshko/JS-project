const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) != 'string'){
        return 'Ошибка!';
    }
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

console.log(reverse(someString))
//
const str = '12345';
function reverseNumber(str) {
    let num = +str;
    let newNum = 0;
    let a = str.length - 1
    for (i = 0; i < str.length; i++){
        newNum += num % 10 * 10 ** a;
        num = Math.floor(num / 10)
        a--;
    }
    return newNum
}

// РЕВЕРС ЧИСЛА С ПЛАВАЮЩЕЙ ТОЧКОЙ 123.456 => 321.654 V.1.0
let num = 123.456;
let arr = num.toString().split('.');
let newArr = arr.map(reverseNumber);
let newStr = newArr.join('.');
let newNum = +newStr;
console.log(newNum)
// РЕВЕРС ЧИСЛА С ПЛАВАЮЩЕЙ ТОЧКОЙ 123.456 => 321.654 V.2.0
let numLength = num.toString().length - 1;
let integer = Math.round(num);
let floatNumLength = numLength - integer.toString().length;
let floatNum = (num - integer).toPrecision(floatNumLength);
floatNum *= 10 ** floatNumLength;
let intResultRev = reverseNumber(integer.toString());
let floatResultRev = reverseNumber(floatNum.toString());
let result = intResultRev + floatResultRev / 10 ** floatNumLength;
console.log(num);
console.log(result);

