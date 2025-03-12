import { ArrCompilar } from './randomArray.js'
import { SelectionSort } from './SelectSort.js'
import { ShuffleSort } from './Shuffle.js'
import { BubbleSort } from './BubbleSort.js'


import { render } from './render.js'

/**
 * Вызов менеджера сортировок.
 * @param {array} arrData Данные о массиве.
 * @param {string} sortName Имя команды.
 * @param {boolean} key Проверка сортировки.
 * @param {number} timeDelay Задержка.
 */
export function Manager(sortName, timeDelay, arrData = ArrCompilar(), key = false) {
    let arr = arrData[0]
    let sarr = arrData[1]
    let req = [arrData[0], true]
    // add call render function renderScreen(arr)
    render(arrData[0])
    if (key) {
        return
    } else {
        switch (sortName) {
            case "SelectionSort":
                req = SelectionSort(arr, sarr)
                break
            case "ShuffleSort":
                req = ShuffleSort(arr, sarr)
                break
            case "BubbleSort":
                req = BubbleSort(arr, sarr)
                break
        }
        arrData[0] = req[0]
        setTimeout(() => { Manager(sortName, timeDelay, arrData, req[1]) }, timeDelay)
    }
}