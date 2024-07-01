# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game. It allows two players to play the game in the browser. The players can start a new game, make moves by clicking on the game board, and reset the game when needed. The game checks for win conditions and ties, and displays appropriate messages when the game ends.

## Features

- Two-player gameplay
- Real-time game board updates
- Win and tie detection
- Game reset functionality

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

To run this project, you will need a modern web browser (such as Chrome, Firefox, or Edge) that supports HTML5, CSS3, and JavaScript.

### Installation

1. Clone the repository or download the source code files.

   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```

2. Navigate to the project directory.

   ```bash
   cd tic-tac-toe
   ```

3. Open the `index.html` file in your web browser.

### Usage

1. Enter the names of the two players in the input fields provided.
2. Click the "Start Game" button to begin the game.
3. Players take turns clicking on the squares of the game board to make their moves.
4. The game will display a message indicating the winner or if the game is a tie.
5. Click the "Reset Game" button to reset the game and start over.

## Code Overview

### HTML

The `index.html` file contains the structure of the web page, including the game board, input fields for player names, and buttons to start and reset the game.

### CSS

The `style.css` file contains the styling for the game, including the layout of the game board and the appearance of the input fields and buttons.

### JavaScript

The `javascript.js` file contains the game logic, including:

- Rendering the game board
- Handling player moves
- Checking for win and tie conditions
- Updating the display messages

#### Key Functions

- `displayController`: Manages the display of messages.
- `GameBoard`: Manages the state and rendering of the game board.
- `createPlayer`: Factory function for creating player objects.
- `Game`: Main game controller, handling game state, player turns, and win/tie detection.
- `checkForWin`: Checks the game board for winning combinations.
- `checkForTie`: Checks the game board for a tie.

### Event Listeners

- Start button: Starts the game when clicked.
- Reset button: Resets the game when clicked.
- Game board squares: Registers player moves when clicked.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

If you have any questions or suggestions, please feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

---

Enjoy playing Tic-Tac-Toe!