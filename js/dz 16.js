//проверка достаточно ли бюджета для здания, размеры здания в структуре объект-массив-объект
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 214649
}

function isBudgetEnough(data) {
    let area = 0;
    let volume = 0;
    data.shops.forEach((shop) => {
        area += shop.width * shop.length
    });
    volume = area * data.height;
    if (data.budget >= volume * data.moneyPer1m3){
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }


}

isBudgetEnough(shoppingMallData);


// let obj = [];
// for (let key in shoppingMallData.shops){
//         obj.push(shoppingMallData.shops[key])
// };
// console.log(obj);
//
//
// for (let key in obj){
//     sumWidth += obj[key].width;
//     sumLength += obj[key].length;
//     console.log(sumWidth, sumLength)
// };
//
// console.log(sumLength, sumWidth);