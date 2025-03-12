/**
 * Операция сортировки корней.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @param {number} length Длинна массива.
 * @param {number} root Номер родителя массива.
 * @param {number} largest Наибольший корень.
 * @param {number} left Правый корень.
 * @param {number} right Левый корень.
 * @returns {array} Измененный массив и ключ изменения
 */
function HeapifySort(arr, length, root, sarr) {
    let largest = root
    let left = 2 * root + 1
    let right = 2 * root + 2
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        return [arr, arr = sarr];
    }
}
/**
 * Операция сортировки пирамидой.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @returns {array} Измененный массив и ключ изменения
 */
function HeapSort(arr, sarr) {
    let length = arr.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        HeapifySort(arr, length, i, sarr);
    }
    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        break
    }

    return [arr, arr == sarr];
}

// don`t work