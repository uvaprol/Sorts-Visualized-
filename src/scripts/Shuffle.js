import { rd } from './randomArray.js'
import { arraysAreEqual } from './ArrayCheker.js'
/**
 * Операция сортировки тряской.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @returns {array} Измененный массив и ключ изменения
 */
export function ShuffleSort(arr, sarr) {
    let n = arr.length - 1;
    if (arr != sarr) {
        let first = rd(0, n)
        let second = rd(0, n)
        if (first == n) {
            second = first - 1
        } else {
            second = first + 1
        }
        let temp = arr[first]
        arr[first] = arr[second]
        arr[second] = temp
    }
    return [arr, arraysAreEqual(arr, sarr)]
}