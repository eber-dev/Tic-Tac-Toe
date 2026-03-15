let jugador1, jugador2;

const displayController = (function () {
    const casillas = document.querySelectorAll(".casillas");
    const pvp1 = document.querySelector(".pvp1");
    const puntuaciones = document.querySelector(".puntuaciones");
    const turnoactual = document.querySelector(".turnoactual");
    const reset = document.querySelector(".reset");
    const modal1 = document.getElementById("modal1");
    const registro = document.querySelector(".registro");

    return {
        mostrar() {
            pvp1.addEventListener("click", () => {
                modal1.showModal();
            });

            registro.addEventListener("submit", (e) => {
                e.preventDefault();
                jugador1 = document.getElementById("nombre1").value;
                jugador2 = document.getElementById("nombre2").value;
                modal1.close();
            });

            reset.addEventListener("click", () => {
                Gameboard.reiniciar(Gameboard.obtenertablero());
                casillas.forEach((casilla) => {
                    casilla.textContent = "";
                });
            });
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
    return {
        iniciojuego() {},
    };
})();

displayController.mostrar();
