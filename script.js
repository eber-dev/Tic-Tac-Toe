function player(name,marca){
    return{
        name,marca
    }
}

const Gameboard = (function (){
    const board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    return{
        colocarMarca(num1,num2,marca){
            board[num1][num2] = marca
        },
        obtenerTablero(){
            let linea1 = ""
            let linea2 = ""
            let linea3 = ""
            let separador = "──────────"

            for(let i=0; i<board.length;i++){
                if(i<2){
                    linea1 += board[0][i]+" "+"|"+" "
                    linea2 += board[1][i]+" "+"|"+" "
                    linea3 += board[2][i]+" "+"|"+" "
                }else{
                    linea1 += board[0][i]
                    linea2 += board[1][i]
                    linea3 += board[2][i]
                }  
            }
            console.log(linea1)
            console.log(separador)
            console.log(linea2)
            console.log(separador)
            console.log(linea3)
            return board     
        },
        verificarCasilla(fila,columna){
            if(board[fila][columna] != ""){
                return false
            }else{
                return true
            }
        },
        reiniciar(){
            for(let i = 0; i<board.length; i++){
                for(let j=0; j<board[i].length;j++){
                    board[i][j] = ""
                }
            }

        }
    }
})()

const Gamecontroller =(function (){
    let player1, player2,actual
    let nocumple = false
    return{
        playervsplayer(name1,name2){
            player1 = player(name1,"X")
            player2 = player(name2,"O")
            return "modo1"
        },
        playervspc(name1){
            player1 = player(name1,"X")
            player2 = player("PC","O")
            return "modo2"
        },
        iniciarJuego(modo){
            switch(modo){
                case "modo1":
                    actual = player1
                    break;
                case "modo2":
                    actual = player1
                    break;
            }

        },
        cambiarTurnos(){
            if(actual == player1){
                actual = player2
                return
            }else if(actual == player2){
                actual =player1
                return
            }
        },
        verificarGanador(matriz,modo){
            let validador = ""
            let validador0 = ""
            let validador1 = ""
            let validador2 = ""
            let validador3 = ""
            let validador4 = ""
            let validador5 = ""
            let validador6 = ""

            for(let i=0; i<matriz.length;i++){
                validador+= matriz[i][i]
                if(validador == "XXX"){
                    console.log(`Ganador ${player1.name}`)
                    nocumple = true
                    return nocumple
                }else if( validador == "OOO"){
                    if(modo == "modo1"){
                        console.log(`Ganador ${player2.name}`)
                        nocumple = true
                        return nocumple
                    }else if(modo == "modo2"){
                        console.log(`Ganador PC`)
                        nocumple = true
                        return nocumple
                    }
                }
            }

            for(let i=0; i<matriz.length;i++){
                validador0 += matriz[i][matriz.length-1-i]
                if(validador0 == "XXX"){
                    console.log(`Ganador ${player1.name}`)
                    nocumple = true
                    return nocumple
                }else if( validador0 == "OOO"){
                    if(modo == "modo1"){
                        console.log(`Ganador ${player2.name}`)
                        nocumple = true
                        return nocumple
                    }else if(modo == "modo2"){
                        console.log(`Ganador PC`)
                        nocumple = true
                        return nocumple
                    }
                }
            }

            for(let i=0; i<matriz.length;i++){
                validador1+= matriz[0][i]
                validador2+= matriz[1][i]
                validador3+= matriz[2][i]

                if(validador1 == "XXX" || validador2 == "XXX" || validador3 == "XXX" ){
                    console.log(`Ganador ${player1.name}`)
                    nocumple = true
                    return nocumple
                }else if(validador1 == "OOO" || validador2 == "OOO" || validador3 == "OOO"){
                    if(modo == "modo1"){
                        console.log(`Ganador ${player2.name}`)
                        nocumple = true
                        return nocumple
                    }else if(modo == "modo2"){
                        console.log(`Ganador PC`)
                        nocumple = true
                        return nocumple
                    }
                }
            }

            for(let i = 0; i< matriz.length; i++){
                validador4 += matriz[i][0]
                validador5 += matriz[i][1]
                validador6 += matriz[i][2]

                if(validador4 == "XXX" || validador5 == "XXX" || validador6 == "XXX" ){
                    console.log(`Ganador ${player1.name}`)
                    nocumple = true
                    return nocumple
                }else if(validador4 == "OOO" || validador5 == "OOO" || validador6 == "OOO"){
                    if(modo == "modo1"){
                        console.log(`Ganador ${player2.name}`)
                        nocumple = true
                        return nocumple
                    }else if(modo == "modo2"){
                        console.log(`Ganador PC`)
                        nocumple = true
                        return nocumple
                    }
                }
                
            }


        },
        verificarEmpate(matriz){
            let verficarespacio = ""
            let lleno
            for(let i = 0; i<matriz.length;i++){
                for(let j  = 0; j<matriz.length;j++){
                    verficarespacio += matriz[i][j]
                    if(matriz[i][j] == "X" || matriz[i][j] == "O"){
                        lleno = true
                    }else{
                        lleno = false
                        return lleno
                    }
                }
            }
            return lleno
        }
    }

})()

const Displaycontroller = (function (){
    

})()

