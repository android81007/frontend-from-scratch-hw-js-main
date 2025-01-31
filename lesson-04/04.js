/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
let strang = ['**','str','**'];
let strangBack = doubleEachCharacter(strang);

function doubleEachCharacter(array) {
    let result = '';
for (let i = 0 ; i < array.length; i++ ) {
    result += array[i] + array[i];
}
return result;
}
// console.log(strangBack);
