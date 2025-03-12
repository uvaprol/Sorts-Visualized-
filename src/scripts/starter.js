import { getSelectedValue } from './getSelectedValue.js'
import { Manager } from './SortManager.js'
//функция старт должна вызывать функцию selectedValue два раза и забирать параметры, а потом она вызывает менеджера
export function addListener(element) {

    function starter() {

        Manager(getSelectedValue('typeSorted'), getSelectedValue('speed'))
    }


    element.addEventListener('click', function () { starter() })

}
