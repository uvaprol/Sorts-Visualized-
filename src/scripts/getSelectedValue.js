//принимает в себя все инпуты с одним именем и возвращает выбранное

export function getSelectedValue(nameRadio) {
    let selectedvalue;
    const radios = document.querySelectorAll(`input[name=${nameRadio}]`);

    for (const radio of radios) {
        if (radio.checked) {
            selectedvalue = radio.value
            break;
        }
    }
    return selectedvalue;
}
