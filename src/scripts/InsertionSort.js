/**
 * Операция сортировки вставкой.
 * @param {array} arr Исходный массив.
 * @param {array} sarr Отсортированый массив.
 * @returns {array} Измененный массив и ключ изменения
 */
export function InsertionSort(arr, sarr) {
    const key = arr[1];
    let j = i - 1;
    if (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
    return [arr, arr == sarr];
}

// don`t work