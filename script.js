function player(name){
    return{
        name
    }
}

const Gameboard = (function (){
    const board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    return{
        colocarMarca(num1,num2){
            board[num1][num2]
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
    return{
        iniciarJuego(){

        },
        cambiarTurnos(){

        },
        verificarGanador(){

        },
        verificarEmpate(){

        }
    }

})()

const Displaycontroller = (function (){

})()

