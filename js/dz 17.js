//разбиение целого массива на массив с 3мя массивами по три элемента, все остальные элементы попадают в строку с перечислением оставшихся элементов
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups() {
    students.sort();
    let newArr = [[],[],[]];
    let str = 'Оставшиеся студенты: ';
    students.forEach((name) => {
        for ( let i = 0; i < 3; i++){
            while (newArr[i].length > 3){
                newArr[i].push(name);
            }
        }
    })

}
students.sort();
console.log(students)
let newArr = [[],[],[]];
let str = 'Оставшиеся студенты: ';
let i = 0;
students.forEach((name) => {
    for (let x in newArr){
        if (newArr[i] < 3){
            newArr.push(name);
        }else {
            i++;
        }
    }
})


console.log(newArr)