// STANDARD FOR

for (let n=1; n<=9; n++) {
    console.log(n)
}

//HM1 - remake the code for a count DOWN: 9

for (let n=9; n>1; n--) {
    console.log(n)
}

//HW2: refactor the gallery code using for



        for  (let i = 9; i > 0;  i--) {    
            container.innerHTML += `<img src="images/${i}.jpg">`
            if (i == 7 || i == 4 ) {
                container.innerHTML += `<br>`
            }

           
        }


let table = `<table border "1"> <tr>`

for (let td = 1; td <=9; td++) {
    table += `<td>${td}</td>`
    if(td== 3 || td == 6) {
        table += `</tr><tr>`
    }
}

//HW1: color the main diagnoal 
// <td style="" .... >
                
                
