/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''

exports.upperCaseFirst = upperCaseFirst;
function upperCaseFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}