const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};
console.log(options.colors);
// delete options.width;
console.log(options);
//ПРОХОЖДЕНИЕ ЦИКЛОМ ПО ОБЪЕКТУ
for (let key in options){
    if (typeof (options[key]) === "object"){
        for (let i in options[key]){
            console.log(`Ствойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Ствойство ${key} имеет значение ${options[key]}`);
    }

}
//РАЗМЕР ОБЪЕКТА, МЕТОДА length У ОБЪЕКТА НЕТУ (СПОСОБ КУРИЛЬЩИКА)
let i = 0;
for (let key in options){
    i++;
}
console.log(i);
//СПОСОБ ЗДОРОВОГО ЧЕЛОВЕКА
console.log(Object.keys(options).length); //Object.keys(options) возвращает массив . который уже в свою очередь имеет свойство

//СОЗДАНИЕ МЕТОДОВ ПОДОБНЫХ LENGTH ВНУТРИ ОБЪЕКТА
const personalInfo = {
    name: 'Ivan',
    age: 31,
    adress: {
        sity: 'Hrodno',
        ul: 'Kupaly,'
    },
    makeTest: function () { //создание метода внутри объекта
        console.log('Test!')
    }
}
personalInfo.makeTest();

//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
const {sity, ul} = personalInfo.adress;
console.log(sity, ul);