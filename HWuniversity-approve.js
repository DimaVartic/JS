let studentGeneralMark      = 6.5
let studentBudget           = 5_000
let studentConnections      = 1

const UNIVERSITY_GRADE      = 7.0
const UNIVERSITY_CONTRACT   = 40_000
const CONNECTIONS = 1

let approve = studentGeneralMark >= UNIVERSITY_GRADE || studentBudget >= UNIVERSITY_CONTRACT

//HW1: add another condition: what if the student is "connected"? 

let approveWithConnections = approve = true || studentConnections == CONNECTIONS