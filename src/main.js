import './style.css'

import { addListener } from './scripts/starter.js'


document.querySelector('#app').innerHTML = `
<div class='main'>
  <header>
    <h1>Sort Visualized</h1>
  </header>
  <main>
   <section class="buttons-settings">
    <div>
      <p>Выберите сортировку </p>
      <label>
        <input type="radio" name="typeSorted" value="BubbleSort" > Сортировка пузырьком
      </label>
      <label>
        <input type="radio" name="typeSorted" value="ShuffleSort" > Сортировка тряской
      </label>
      <label>
        <input type="radio" name="typeSorted" value="SelectionSort" checked> Сортировка выбором
      </label>
     
    </div>
    <div>
      <p>Выберите скорость </p>
      <label>
        <input type="radio" name="speed" value="1000" > Медленно
      </label>
      <label>
        <input type="radio" name="speed" value="500"> Нормально
      </label>
      <label>
        <input type="radio" name="speed" value="1" checked> Быстрая
      </label>

      <button class="go" id="go">Погнали</button>
    </div>

  </section>
      <section class="diagram-field">
    
  </section>
  </main>
  

    <div/>
`


addListener(document.querySelector('#go'))