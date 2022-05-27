//ВЫЧИСЛЕНИЕ ОБЪЕМА КУБА И ЕГО ОБЩЕЙ ПЛОЩАДИ
function calculateVolumeAndArea(cubeEdgeLength) {
    let cubeVolume = Math.pow(cubeEdgeLength, 3);
    let cubeArea = 6 * Math.pow(cubeEdgeLength, 2);
    if (!Number.isInteger(cubeEdgeLength) || !Number.isInteger(cubeVolume) || !Number.isInteger(cubeArea) || cubeEdgeLength <= 0) {
        return `При вычислении произошла ошибка`;
    } else {
        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
    }
}

calculateVolumeAndArea(5);

//ОПРЕДЕЛЕНИЕ НОМЕРА КУПЕ ПО МЕСТУ
function getCoupeNumber(seatNumber) {
    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует'
    }
    if (seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места'
    }
    if (seatNumber > 0 && seatNumber < 37) {
        return Math.ceil(seatNumber / 4)
    }
}

console.log(getCoupeNumber(0));

//ВОЗВРАЩЕНИЕ ВРЕМЕНИ В НУЖНОМ ФОРМАТЕ
function getTimeFromMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let minutesLeft = minutes - hours * 60;
    if (minutes < 0 || minutes % 1 != 0 || typeof (minutes) != "number") {
        return `Ошибка, проверьте данные`;
    }
    if (hours === 0 || (hours >= 5 && hours <= 10)) {
        return `Это ${hours} часов и ${minutesLeft} минут`;
    } else if (hours === 1) {
        return `Это ${hours} час и ${minutesLeft} минут`;
    } else if (hours >= 2 && hours <= 4) {
        return `Это ${hours} часа и ${minutesLeft} минут`;
    }

}

getTimeFromMinutes(90)

//ПОИСК МАКС ЧИСЛА
function findMaxNumber(a, b, c, d) {
    if (typeof (a) != "number" || typeof (b) != "number" || typeof (c) != "number" || typeof (d) != "number" || findMaxNumber.arguments != 4) {
        return 0;
    } else {
        return Math.max(a, b, c, d)
    }
}

findMaxNumber(4, 6, 8, 9)

//ЧИСЛА ФИБОНАЧИ БЕЗ РЕКУРСИИ
function fib(numberOfNumbers) {
    let strFib = '';
    let first = '0';
    let second = '1';
    if (typeof (numberOfNumbers) !== 'number' || numberOfNumbers <= 0 || !Number.isInteger(numberOfNumbers)) {
        return "";
    }
    for (let i = 0; i < numberOfNumbers; i++) {
        if (i + 1 === numberOfNumbers) {
            strFib = `${first}`;
        } else {
            strFib += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return strFib
}

console.log(fib(10))
