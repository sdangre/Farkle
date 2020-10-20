
let rollDiceButton=document.getElementById('roll')

//Trying to add
let addEl= document.getElementById('add')

//All of the Dice images
let D1Face1El=document.getElementById('D1Face1')
let D1Face2El=document.getElementById('D1Face2')
let D1Face3El=document.getElementById('D1Face3')
let D1Face4El=document.getElementById('D1Face4')
let D1Face5El=document.getElementById('D1Face5')
let D1Face6El=document.getElementById('D1Face6')

let D2Face1El=document.getElementById('D2Face1')
let D2Face2El=document.getElementById('D2Face2')
let D2Face3El=document.getElementById('D2Face3')
let D2Face4El=document.getElementById('D2Face4')
let D2Face5El=document.getElementById('D2Face5')
let D2Face6El=document.getElementById('D2Face6')

let D3Face1El=document.getElementById('D3Face1')
let D3Face2El=document.getElementById('D3Face2')
let D3Face3El=document.getElementById('D3Face3')
let D3Face4El=document.getElementById('D3Face4')
let D3Face5El=document.getElementById('D3Face5')
let D3Face6El=document.getElementById('D3Face6')

let D4Face1El=document.getElementById('D4Face1')
let D4Face2El=document.getElementById('D4Face2')
let D4Face3El=document.getElementById('D4Face3')
let D4Face4El=document.getElementById('D4Face4')
let D4Face5El=document.getElementById('D4Face5')
let D4Face6El=document.getElementById('D4Face6')

let D5Face1El=document.getElementById('D5Face1')
let D5Face2El=document.getElementById('D5Face2')
let D5Face3El=document.getElementById('D5Face3')
let D5Face4El=document.getElementById('D5Face4')
let D5Face5El=document.getElementById('D5Face5')
let D5Face6El=document.getElementById('D5Face6')

let D6Face1El=document.getElementById('D6Face1')
let D6Face2El=document.getElementById('D6Face2')
let D6Face3El=document.getElementById('D6Face3')
let D6Face4El=document.getElementById('D6Face4')
let D6Face5El=document.getElementById('D6Face5')
let D6Face6El=document.getElementById('D6Face6')

//For setting aside the Dice (all 6 dice are being rolled)
let D1Enabled=true
let D2Enabled=true
let D3Enabled=true
let D4Enabled=true
let D5Enabled=true
let D6Enabled=true

//The function to get random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

//Displaying all of the Dice images
function displayDice(){

resetDice()
//So that the image resets itself every time I roll. Only 6 dice faces are showing at all times
D1Face1El.classList.add('remove')
D1Face2El.classList.add('remove')
D1Face3El.classList.add('remove')
D1Face4El.classList.add('remove')
D1Face5El.classList.add('remove')
D1Face6El.classList.add('remove')

D2Face1El.classList.add('remove')
D2Face2El.classList.add('remove')
D2Face3El.classList.add('remove')
D2Face4El.classList.add('remove')
D2Face5El.classList.add('remove')
D2Face6El.classList.add('remove')

D3Face1El.classList.add('remove')
D3Face2El.classList.add('remove')
D3Face3El.classList.add('remove')
D3Face4El.classList.add('remove')
D3Face5El.classList.add('remove')
D3Face6El.classList.add('remove')

D4Face1El.classList.add('remove')
D4Face2El.classList.add('remove')
D4Face3El.classList.add('remove')
D4Face4El.classList.add('remove')
D4Face5El.classList.add('remove')
D4Face6El.classList.add('remove')

D5Face1El.classList.add('remove')
D5Face2El.classList.add('remove')
D5Face3El.classList.add('remove')
D5Face4El.classList.add('remove')
D5Face5El.classList.add('remove')
D5Face6El.classList.add('remove')

D6Face1El.classList.add('remove')
D6Face2El.classList.add('remove')
D6Face3El.classList.add('remove')
D6Face4El.classList.add('remove')
D6Face5El.classList.add('remove')
D6Face6El.classList.add('remove')

//Defining the value of the "score" aka the number on the dice face and then pulling up an image that corresponds to the score
if (D1Enabled) {
let score1El = getRandomInt(6) + 1
    //D1
    if (score1El === 1){
        D1Face1El.classList.remove('remove')
    }
    if (score1El === 2){
        D1Face2El.classList.remove('remove')
    }
    if (score1El === 3){
        D1Face3El.classList.remove('remove')
    }
    if (score1El === 4){
        D1Face4El.classList.remove('remove')
    }
    if (score1El === 5){
        D1Face5El.classList.remove('remove')
    }
    if (score1El === 6){
        D1Face6El.classList.remove('remove')
    }
}

if (D2Enabled){
let score2El = getRandomInt(6) + 1
    //D2
    if (score2El === 1){
        D2Face1El.classList.remove('remove')
    }
    if (score2El === 2){
        D2Face2El.classList.remove('remove')
    }
    if (score2El === 3){
        D2Face3El.classList.remove('remove')
    }
    if (score2El === 4){
        D2Face4El.classList.remove('remove')
    }
    if (score2El === 5){
        D2Face5El.classList.remove('remove')
    }
    if (score2El === 6){
        D2Face6El.classList.remove('remove')
    }
}

if (D3Enabled){
let score3El = getRandomInt(6) + 1
    //D3
    if (score3El === 1){
        D3Face1El.classList.remove('remove')
    }
    if (score3El === 2){
        D3Face2El.classList.remove('remove')
    }
    if (score3El === 3){
        D3Face3El.classList.remove('remove')
    }
    if (score3El === 4){
        D3Face4El.classList.remove('remove')
    }
    if (score3El === 5){
        D3Face5El.classList.remove('remove')
    }
    if (score3El === 6){
        D3Face6El.classList.remove('remove')
    }
}

if (D4Enabled){
let score4El = getRandomInt(6) + 1
    //D4
    if (score4El === 1){
        D4Face1El.classList.remove('remove')
    }
    if (score4El === 2){
        D4Face2El.classList.remove('remove')
    }
    if (score4El === 3){
        D4Face3El.classList.remove('remove')
    }
    if (score4El === 4){
        D4Face4El.classList.remove('remove')
    }
    if (score4El === 5){
        D4Face5El.classList.remove('remove')
    }
    if (score4El === 6){
        D4Face6El.classList.remove('remove')
    }
}

if (D5Enabled){
let score5El = getRandomInt(6) + 1
    //D5
    if (score5El === 1){
        D5Face1El.classList.remove('remove')
    }
    if (score5El === 2){
        D5Face2El.classList.remove('remove')
    }
    if (score5El === 3){
        D5Face3El.classList.remove('remove')
    }
    if (score5El === 4){
        D5Face4El.classList.remove('remove')
    }
    if (score5El === 5){
        D5Face5El.classList.remove('remove')
    }
    if (score5El === 6){
        D5Face6El.classList.remove('remove')
    }
}

if (D6Enabled){
let score6El = getRandomInt(6) + 1
    //D5
    if (score6El === 1){
        D6Face1El.classList.remove('remove')
    }
    if (score6El === 2){
        D6Face2El.classList.remove('remove')
    }
    if (score6El === 3){
        D6Face3El.classList.remove('remove')
    }
    if (score6El === 4){
        D6Face4El.classList.remove('remove')
    }
    if (score6El === 5){
        D6Face5El.classList.remove('remove')
    }
    if (score6El === 6){
        D6Face6El.classList.remove('remove')
    }
}
}

rollDiceButton.addEventListener('click', displayDice)

function resetDice(){
    if (!D1Enabled  && !D2Enabled && !D3Enabled  && !D4Enabled && !D5Enabled  && !D6Enabled ) {
        D1Enabled = true
        D2Enabled = true
        D3Enabled = true
        D4Enabled = true
        D5Enabled = true
        D6Enabled = true
    }
}



//Set Dice Aside
function removeDice1(){
    D1Enabled = false
    D1Face1El.classList.add('remove')
    D1Face2El.classList.add('remove')
    D1Face3El.classList.add('remove')
    D1Face4El.classList.add('remove')
    D1Face5El.classList.add('remove')
    D1Face6El.classList.add('remove')
}

D1Face1El.addEventListener('click', removeDice1)
D1Face2El.addEventListener('click', removeDice1)
D1Face3El.addEventListener('click', removeDice1)
D1Face4El.addEventListener('click', removeDice1)
D1Face5El.addEventListener('click', removeDice1)
D1Face6El.addEventListener('click', removeDice1)

function removeDice2(){
    D2Enabled = false

    D2Face1El.classList.add('remove')
    D2Face2El.classList.add('remove')
    D2Face3El.classList.add('remove')
    D2Face4El.classList.add('remove')
    D2Face5El.classList.add('remove')
    D2Face6El.classList.add('remove')
}

D2Face1El.addEventListener('click', removeDice2)
D2Face2El.addEventListener('click', removeDice2)
D2Face3El.addEventListener('click', removeDice2)
D2Face4El.addEventListener('click', removeDice2)
D2Face5El.addEventListener('click', removeDice2)
D2Face6El.addEventListener('click', removeDice2)

function removeDice3(){
    D3Enabled = false

    D3Face1El.classList.add('remove')
    D3Face2El.classList.add('remove')
    D3Face3El.classList.add('remove')
    D3Face4El.classList.add('remove')
    D3Face5El.classList.add('remove')
    D3Face6El.classList.add('remove')
}

D3Face1El.addEventListener('click', removeDice3)
D3Face2El.addEventListener('click', removeDice3)
D3Face3El.addEventListener('click', removeDice3)
D3Face4El.addEventListener('click', removeDice3)
D3Face5El.addEventListener('click', removeDice3)
D3Face6El.addEventListener('click', removeDice3)

function removeDice4(){
    D4Enabled = false

    D4Face1El.classList.add('remove')
    D4Face2El.classList.add('remove')
    D4Face3El.classList.add('remove')
    D4Face4El.classList.add('remove')
    D4Face5El.classList.add('remove')
    D4Face6El.classList.add('remove')
}

D4Face1El.addEventListener('click', removeDice4)
D4Face2El.addEventListener('click', removeDice4)
D4Face3El.addEventListener('click', removeDice4)
D4Face4El.addEventListener('click', removeDice4)
D4Face5El.addEventListener('click', removeDice4)
D4Face6El.addEventListener('click', removeDice4)

function removeDice5(){
    D5Enabled = false

    D5Face1El.classList.add('remove')
    D5Face2El.classList.add('remove')
    D5Face3El.classList.add('remove')
    D5Face4El.classList.add('remove')
    D5Face5El.classList.add('remove')
    D5Face6El.classList.add('remove')
}

D5Face1El.addEventListener('click', removeDice5)
D5Face2El.addEventListener('click', removeDice5)
D5Face3El.addEventListener('click', removeDice5)
D5Face4El.addEventListener('click', removeDice5)
D5Face5El.addEventListener('click', removeDice5)
D5Face6El.addEventListener('click', removeDice5)

function removeDice6(){
    D6Enabled = false

    D6Face1El.classList.add('remove')
    D6Face2El.classList.add('remove')
    D6Face3El.classList.add('remove')
    D6Face4El.classList.add('remove')
    D6Face5El.classList.add('remove')
    D6Face6El.classList.add('remove')
}

D6Face1El.addEventListener('click', removeDice6)
D6Face2El.addEventListener('click', removeDice6)
D6Face3El.addEventListener('click', removeDice6)
D6Face4El.addEventListener('click', removeDice6)
D6Face5El.addEventListener('click', removeDice6)
D6Face6El.addEventListener('click', removeDice6)
