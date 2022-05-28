const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = [...baseCurrencies, ...additionalCurrencies];
function availableCurr(arr, missingCurr) {
    let result = `Доступные валюты:\n`
    if (arr.length === 0){
        return `Нет доступных валют`
    }
    for (let key in arr){
        if (arr[key] === missingCurr){
                continue;
            }
        result += `${arr[key]}\n`
        }
        return result
    }


console.log(availableCurr(['USD', 'EUR', 'UAH', 'RUB', 'CNY'], 'RUB'));

