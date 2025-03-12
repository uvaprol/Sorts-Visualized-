import { arraysAreEqual } from './ArrayCheker.js'
/**
 * Операция сортировки выбором.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @returns {array} Измененный массив и ключ изменения
 */
export function SelectionSort(arr, sarr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            break
        }
    }
    return [arr, arraysAreEqual(arr, sarr)];
}