/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение


function checkSpam(source, example) {
    if (typeof source !== "string") {
        return false;
    }
    return (source.toUpperCase().includes(example.toUpperCase()));



}

// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// checkSpam('pitterxxx@gmail.com', 'XXX'); // true



    console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('wr', 'e'));
console.log(checkSpam('jh', 'f'));

exports.checkSpam = checkSpam;