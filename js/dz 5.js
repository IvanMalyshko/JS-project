//сформировать елочку из *
const lines = 5;
let result = '';
for (let i = 1; i <= lines + 1 ; i++ ){
    for ( let j = 0; j < lines * 2 + 1; j++){
        if (lines - i < j && lines + i > j){
            result += '*';
        }
        if (lines + 1 - i > j){
            result += ' ';
        }

    }
    result += '\n';
}

console.log(result)
