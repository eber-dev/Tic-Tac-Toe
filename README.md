# Tic Tac Toe Web

## Overview

Tic Tac Toe Web is a browser-based implementation of the classic Tic Tac Toe game.

Two players can register their names, take turns placing their marks on a 3x3 board, and the application automatically detects the winner or a draw.

This project was created as part of **The Odin Project JavaScript curriculum** to practice modular JavaScript, DOM manipulation, and game logic.

---

# Features

* Two player mode (Player vs Player)
* Player registration through a modal form
* Turn based gameplay
* Automatic win detection
* Draw detection
* Reset game functionality
* Dynamic DOM updates

---

# Technologies Used

* HTML
* CSS
* JavaScript
* DOM Manipulation
* Module Pattern (IIFE)
* Factory Functions

---

# Project Structure

index.html → page structure and game board
styles.css → visual styling
script.js → game logic and application control

---

# Game Architecture

The game is divided into three main modules:

Gameboard
Gamecontroller
DisplayController

Each module has a specific responsibility.

---

# Gameboard Module

The **Gameboard module** manages the internal state of the Tic Tac Toe board.

It stores the board as a 2D array.

Example board:

```javascript
[
 ["", "", ""],
 ["", "", ""],
 ["", "", ""]
]
```

### Responsibilities

* Store the board state
* Place player marks
* Reset the board

### Methods

**obtenertablero()**

Returns the current board state.

**colocarmarca(fila, columna, marca)**

Places a player's mark (X or O) on the board.

**reiniciar(board)**

Resets all board positions to empty strings.

---

# Gamecontroller Module

The **Gamecontroller module** manages the rules of the game.

It handles:

* player creation
* turn switching
* win detection
* draw detection

### Player Factory Function

Players are created using a factory function:

```javascript
function player(name, marca){
 return {
  name,
  marca
 }
}
```

Each player has:

* name
* mark (X or O)

---

# Turn Management

The function **cambiarturno()** alternates the current player.

Example logic:

Player 1 → Player 2
Player 2 → Player 1

---

# Win Detection

The function **verificarganador()** evaluates the board and checks all possible winning combinations.

It checks:

* 3 rows
* 3 columns
* 2 diagonals

If a winning pattern is detected, the corresponding player is returned.

Otherwise it returns `null`.

---

# Draw Detection

The function **vaerificarempate()** checks if the board is full and no player has won.

If all cells are occupied, the game ends in a draw.

---

# Display Controller

The **DisplayController module** manages the interaction between the user interface and the game logic.

### Responsibilities

* Handle user clicks on board cells
* Update the DOM with player marks
* Display current turn
* Show the winner
* Manage modal form for player registration
* Reset the game interface

---

# Game Flow

1. The user clicks **Start**.
2. A modal appears requesting both player names.
3. Players are registered.
4. The game begins.
5. Players click board cells to place their marks.
6. After each move:

   * the game checks for a winner
   * the game checks for a draw
7. The winner or draw is displayed.
8. The game can be restarted using the **Reset** button.

---

# What I Learned

During this project I practiced:

* JavaScript module pattern
* Factory functions
* Managing application state
* Separating game logic from UI logic
* DOM manipulation
* Event handling

