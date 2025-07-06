import GameOfLife from "./gameOfLife.js";

// Esta clase maneja la interfaz del Game of Life
// Similar a como presenter.js maneja la interfaz del sumador
class GameOfLifePresenter {
  constructor() {
    // Variables para controlar el juego
    this.game = null;  // El juego actual
    this.isRunning = false;  // ¿Está corriendo la simulación?
    this.generation = 0;  // Contador de generaciones
    
    // Configurar la interfaz
    this.setupInterface();
    this.createNewGame();
  }

  // Obtener los elementos HTML (como en presenter.js)
  setupInterface() {
    this.boardElement = document.querySelector("#game-board");
    this.startButton = document.querySelector("#start-game");
    this.stepButton = document.querySelector("#step-game");
    this.clearButton = document.querySelector("#clear-game");
    this.generationDisplay = document.querySelector("#generation-display");
    
    // Agregar eventos a los botones
    this.startButton.addEventListener("click", () => this.startGame());
    this.stepButton.addEventListener("click", () => this.stepGame());
    this.clearButton.addEventListener("click", () => this.clearGame());
  }

  
  // Crear un nuevo juego (como resetear el sumador)
  createNewGame() {
    this.game = new GameOfLife(10, 10);  // Tablero de 10x10
    this.generation = 0;
    this.isRunning = false;
    this.startButton.textContent = "Iniciar";
    this.showBoard();
    this.updateGenerationDisplay();
  }

  // Mostrar el tablero en HTML
  showBoard() {
    if (!this.game) return;
    
    const board = this.game.getBoard();
    let html = "";
    
    // Crear una tabla HTML para mostrar el tablero
    html += "<table>";
    for (let i = 0; i < board.length; i++) {
      html += "<tr>";
      for (let j = 0; j < board[i].length; j++) {
        const cellClass = board[i][j] === 1 ? "alive" : "dead";
        html += `<td class="cell ${cellClass}" onclick="gamePresenter.toggleCell(${i}, ${j})"></td>`;
      }
      html += "</tr>";
    }
    html += "</table>";
    
    this.boardElement.innerHTML = html;
  }

  // Alternar entre célula viva/muerta al hacer clic
  toggleCell(row, col) {
    if (!this.game) return;
    
    const currentValue = this.game.getCell(row, col);
    const newValue = currentValue === 1 ? 0 : 1;
    this.game.setCell(row, col, newValue);
    this.showBoard();
  }

  // Iniciar/parar la simulación
  startGame() {
    if (this.isRunning) {
      this.stopGame();
    } else {
      this.isRunning = true;
      this.startButton.textContent = "Parar";
      this.runSimulation();
    }
  }

  // Parar la simulación
  stopGame() {
    this.isRunning = false;
    this.startButton.textContent = "Iniciar";
  }

  // Ejecutar la simulación automáticamente
  runSimulation() {
    if (!this.isRunning) return;
    
    this.stepGame();
    setTimeout(() => this.runSimulation(), 500);  // Esperar 500ms entre generaciones
  }

  // Avanzar una generación
  stepGame() {
    if (!this.game) return;
    
    this.game.nextGeneration();
    this.generation++;
    this.showBoard();
    this.updateGenerationDisplay();
  }

  // Limpiar el tablero
  clearGame() {
    this.createNewGame();
  }

  // Actualizar el contador de generaciones
  updateGenerationDisplay() {
    this.generationDisplay.textContent = `Generación: ${this.generation}`;
  }
}

// Crear una instancia global (como en presenter.js)
let gamePresenter;

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  gamePresenter = new GameOfLifePresenter();
});
