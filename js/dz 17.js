//разбиение целого массива на массив с 3мя массивами по три элемента, все остальные элементы попадают в строку с перечислением оставшихся элементов
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let resultArray = [[], [], [], 'Оставшиеся студенты: '];
    for (let i = 0; i < arr.length; i++) {
        if (i >= 9) {
            console.log(arr[i], i);
            resultArray[3] += arr[i];
            if (i !== arr.length - 1) {
                resultArray[3] += ', ';
            }
            continue;
        }

        resultArray[Math.floor(i / 3)].push(arr[i]);

    }
    if (arr.length === 9) {
        resultArray[3] += '-';
    }
    return resultArray;
}

console.log(sortStudentsByGroups(students));
// for (let i = 0; i < arr.length; i){
//     for (let x = 0; x < 3; x){
//         if (resultArray[x].length < 3){
//             resultArray[x].push(arr[i]);
//             i++;
//         } else {
//             x++;
//         }
//         if (resultArray[0].length === 3 && resultArray[1].length === 3 && resultArray[2].length === 3){
//             resultArray[3] += arr[i];
//             resultArray[3] += ','
//             i++;
//         }
//     }
// }