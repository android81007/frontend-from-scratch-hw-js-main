/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
const str = "Hello World From JavaScript";

function capitalizeWords(str) {
    let words = str.split(' '); // Разбиваем строку на массив слов
    for (let i = 0; i < words.length; i++) {
      // Преобразуем каждое слово, делая первую букву заглавной
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' '); // Собираем слова обратно в строку
}
console.log(str);

