import { arraysAreEqual } from './ArrayCheker.js'
/**
 * Операция сортировки пузырьком.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @returns {array} Измененный массив и ключ изменения
 */
export function BubbleSort(arr, sarr) {
    const n = arr.length - 1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            break
        }
    }
    return [arr, arraysAreEqual(arr, sarr)];
}