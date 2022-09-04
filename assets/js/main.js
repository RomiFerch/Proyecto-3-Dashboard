import {showGraphic} from "./data2.js"

let menu = document.getElementById('menu')

menu.addEventListener('click', (e) =>{

    console.log(e.target);
  if (e.target && e.target.id === ('top')) {
    
    showGraphic()
    
  }
  

})
