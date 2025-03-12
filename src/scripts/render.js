export function render(array) {
    const field = document.querySelector('.diagram-field')
    field.innerHTML = ''
    for (const num of array) {
        // const newDiv = document.createElement('div');
        // newDiv.classList = 'column';
        // newDiv.style.height = `${num}0%`;
        const newDiv = `<div class='column' style='height:${num}%;'></div>`
        field.innerHTML += newDiv
    }

}   