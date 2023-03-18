const STEP = 36  // = width 
let robotLeft = 1 // coords: steps
let robotDown = 1


function render() {
    gameMap.innerHTML = 
            `<div class="robot" 
            
            style="transform:translateX(${robotLeft * STEP}px)">
            
            </div>`
 }

 function renderY() {
    gameMap.innerHTML = 
            `<div class="robot" 
            
            style="transform:translateY(${robotDown * STEP}px)">
            
            </div>`

 }

 render()