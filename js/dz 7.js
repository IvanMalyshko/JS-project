function returnNeighboringNumbers(num) {
    let arr = [];
    arr.push(num - 1, num, num + 1);
    return arr
}
console.log(returnNeighboringNumbers(5))

function getMathResult(base, progress) {
    let arr = [];
    if (typeof (progress) != "number" || progress <= 0) return base;
    for (let i = 1; i <= progress; i++ ){
        arr.push(base * i);
    }
    return arr.join('---')
}
console.log(getMathResult(5,4));
console.log(typeof (getMathResult(5,4)));