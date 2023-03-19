const STEP = 36  // = width
let robotLeft = 0 // coords: steps
let robotDown = 0


function render() {
    gameMap.innerHTML =
            `<div class="robot"

            style="transform:translate(${robotLeft * STEP}px, ${robotDown * STEP}px)">

            </div>`
 }

//  function renderY() {
//     gameMap.innerHTML =
//             `<div class="robot"

//             style="transform:translateY(${robotDown * STEP}px)">

//             </div>`

//  }

 render()
