let jugador1, jugador2;

const displayController = (function () {
    const casillas = document.querySelectorAll(".casilla");
    const pvp1 = document.querySelector(".pvp1");
    const puntuaciones = document.querySelector(".puntuaciones");
    const turnoactual = document.querySelector(".turnoactual");
    const reset = document.querySelector(".reiniciar");
    const modal1 = document.getElementById("modal1");
    const registro = document.querySelector(".registro");
    let correcto = false;
    let actual;
    return {
        mostrar() {
            pvp1.addEventListener("click", () => {
                modal1.showModal();
            });

            registro.addEventListener("submit", (e) => {
                e.preventDefault();
                jugador1 = document.getElementById("nombre1").value;
                jugador2 = document.getElementById("nombre2").value;
                correcto = true;
                actual = Gamecontroller.iniciojuego();
                console.log(Gameboard.obtenertablero());
                modal1.close();
            });

            casillas.forEach((casilla) => {
                casilla.addEventListener("click", () => {
                    if (correcto == true) {
                        let coordenadas = casilla.dataset.coordenada;
                        let separacion1 = coordenadas.split(".");
                        let [fila, columna] = separacion1;
                        console.log(fila);
                        console.log(columna);
                        console.log(Gameboard.obtenertablero());

                        if (Gamecontroller.verificarcasilla(Gameboard.obtenertablero(), fila, columna)) {
                            Gameboard.colocarmarca(fila, columna, actual.marca);
                            actual = Gamecontroller.cambiarturno(actual);
                        }
                    } else {
                        return;
                    }
                });
            });

            reset.addEventListener("click", () => {
                Gameboard.reiniciar(Gameboard.obtenertablero());
                casillas.forEach((casilla) => {
                    casilla.textContent = "";
                });
            });

            if (Gamecontroller.vaerificarempate(Gameboard.obtenertablero())) {
                Gamecontroller.verificarganador(Gameboard.obtenertablero());
            }
        },
    };
})();

function player(name, marca) {
    return {
        name,
        marca,
    };
}

const Gameboard = (function () {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    return {
        obtenertablero() {
            return board;
        },

        colocarmarca(fila, columna, marca) {
            board[fila][columna] = marca;
        },

        reiniciar(board) {
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    board[i][j] = "";
                }
            }
        },
    };
})();

const Gamecontroller = (function () {
    let actual, player1, player2;
    return {
        iniciojuego() {
            player1 = player(jugador1, "X");
            player2 = player(jugador2, "O");
            actual = player1;
            return actual;
        },
        cambiarturno(actual) {
            if (actual == player1) {
                actual = player2;
                return player2;
            } else if (actual == player2) {
                actual = player1;
                return player1;
            }
        },
        verificarcasilla(board, fila, columna) {
            if (board[fila][columna] === "") {
                return true;
            } else {
                return false;
            }
        },
        verificarganador(board) {
            let diagonal1 = "";
            let diagonal2 = "";
            let fila1 = "";
            let fila2 = "";
            let fila3 = "";
            let columna1 = "";
            let columna2 = "";
            let columna3 = "";

            for (let i = 0; i < board.length; i++) {
                diagonal1 += board[i][i];
                diagonal2 += board[i][board.length - 1 - i];
                fila1 += board[0][i];
                fila2 += board[1][i];
                fila3 += board[2][i];
                columna1 += board[i][0];
                columna2 += board[i][1];
                columna3 += board[i][2];
            }

            let condicion1 = diagonal1 == "XXX" || diagonal2 == "XXX";
            let condicion2 = fila1 == "XXX" || fila2 == "XXX" || fila3 == "XXX";
            let condicion3 = columna1 == "XXX" || columna2 == "XXX" || columna3 == "XXX";
            let condicion4 = diagonal1 == "OOO" || diagonal2 == "OOO";
            let condicion5 = fila1 == "OOO" || fila2 == "OOO" || fila3 == "OOO";
            let condicion6 = columna1 == "OOO" || columna2 == "OOO" || columna3 == "OOO";

            if (condicion1 || condicion2 || condicion3) {
                return player1;
            } else if (condicion4 || condicion5 || condicion6) {
                return player2;
            }
        },

        vaerificarempate(board) {
            let verificarcasilla = "";
            let lleno;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    verificarcasilla += board[i][j];
                    if (board[i][j] == "X" || board[i][j] == "O") {
                        lleno = true;
                    } else {
                        lleno = false;
                    }
                }
            }
            return lleno;
        },
    };
})();

displayController.mostrar();
