/**
 * Операция генерации рандомных чисел.
 * @param {number} min минимальное число.
 * @param {number} max максимальное число.
 * @returns {number} Рандомное число в диапазоне от 1 до 100.
 */
export function rd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Операция генерации рандомного массива.
 * @returns {array} Рандомный массив длинной в 100 элементов.
 */
export function ArrCompilar() {
    let numbers = []
    let arr = []
    let n
    for (let i = 1; i < 101; i++) {
        numbers.push(i)
    }
    for (let i = 0; i < 100; i++) {
        n = rd(0, numbers.length)
        arr.push(numbers[n])
        numbers.splice(n, 1)
    }
    const sarr = structuredClone(arr)
    return [arr, sarr.sort(function (a, b) { return a - b })]
}