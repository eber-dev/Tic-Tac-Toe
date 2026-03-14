const displayController = (function () {
    const casillas = document.querySelectorAll(".casillas");
    const pvp1 = document.querySelector(".pvp1");
    const pvc1 = document.querySelector(".pvc1");
    const reset = document.querySelector(".reset");
    const modal1 = document.getElementById("modal1");
    const enviarmodo1 = document.querySelector(".enviarmodo1");
    const modal2 = document.getElementById("modal2");
    const enviarmodo2 = document.querySelector(".enviarmodo2");

    return {
        mostrar() {
            pvp1.addEventListener("click", () => {
                modal1.showModal();
            });

            enviarmodo1.addEventListener("click", () => {
                modal1.close();
            });

            pvc1.addEventListener("click", () => {
                modal2.showModal();
            });

            enviarmodo2.addEventListener("click", () => {
                modal2.close();
            });
        },
    };
})();

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

        reiniciar() {
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    board[i][j] = "";
                }
            }
        },
    };
})();
