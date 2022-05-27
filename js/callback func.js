function first() {
    //здесь что то происходит
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
// 2я функция отработает раньше 1ой из-за таймаута
first();
second();


//Тоже самое только с использованием CALLBACK
function learnJS (lang, callback){
    console.log(`Я начал учить ${lang}`);
    callback();
}
function done (){
    console.log('Mne eto nravitsa')
}
learnJS('JavaScript', done)

