// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

// Примечание: в этом задании использовать promt не нужно.


// test var
const x = true

let result = typeof x

if (result=="number" || result=="string" || result=="boolean") {
    console.log(`x - ${result}`)
} else {
    console.log('Тип x не определён')
}