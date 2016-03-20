'use strict'

let player = 2
let player1Array = []
let player2Array = []

// const winningArrays = ['0','1','2'], '345', '678', '036', '147', '258', '048', '246']


function turn(btn) {

    if(player % 2 === 0){
        document.getElementById(btn).value = 'X'
        player += 1
        player1Array.push(btn)
        console.log(player1Array)

        checkWinner(player1Array)

    } else {
        document.getElementById(btn).value = 'O'
        player += 1
        player2Array.push(btn)
        console.log(player2Array)

        checkWinner(player2Array)
    }
}


function checkWinner(dudeArray) {

    let newarr = dudeArray.join('')
    if(dudeArray.length === 3 && winningArrays.indexOf(newarr) !== -1) {
        console.log('we have a winner!')
    }
}











