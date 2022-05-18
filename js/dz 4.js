//переписать числа из arr в result
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }

    // Не трогаем
    return result;
}

//увеличить значения в миссиве в 2 раза а если текст то добавить ' - done'
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (i = 0; i < 5; i++){
        if (typeof data[i] === "number"){
            data[i] = data[i] * 2;
        } else if (typeof data[i] === 'string'){
            data[i] = data[i] + ' - done';
        }
    }

    // Не трогаем
    return data;
}

//развернуть массив data наоборот и записать в result
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(let i = data.length - 1; i>=0; i--){
        result.push(data[i]);
    }
    console.log(result);
    // Не трогаем
    return result;
}