/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */
// Решение
const person = {rate:0};

Object.defineProperty(person, "rate",{
    configurable: false,
});
 Object.defineProperty(person, "salary",{
     enumerable: false,
    get: function() {

        return this.rate * new Date().getUTCDate();
    }
 });



person.rate = 30;

console.log(person.salary);

exports.person = person;
