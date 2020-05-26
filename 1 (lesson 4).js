/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
    get salary() {
        const dt = new Date();
        const currDate = dt.getUTCDate();
        const currYear = dt.getFullYear();
        const currMonth = dt.getUTCMonth();
        const lastDayMonth = new Date(Date.UTC(currYear, currMonth + 1, 1) - 1);
        const counDayMonth = lastDayMonth.getUTCDate();

        return (counDayMonth - currDate > 20) ? `good salary` : `bad salary`;

    }
}
// Решение

console.log(person.salary);

 exports.person = person;

