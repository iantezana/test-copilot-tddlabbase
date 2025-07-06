import GameOfLife from "./gameOfLife.js";

// Presenter mínimo para Historia 1: Crear un tablero básico
class GameOfLifePresenter {
  constructor() {
    this.setupInterface();
    this.createBoard();
  }

  setupInterface() {
    // Obtener elementos del HTML
    this.boardElement = document.querySelector("#game-board");
    this.createButton = document.querySelector("#create-board");
    this.widthInput = document.querySelector("#board-width");
    this.heightInput = document.querySelector("#board-height");
    
    // Agregar evento al botón
    this.createButton.addEventListener("click", () => this.createBoard());
  }

  createBoard() {
    // Obtener dimensiones de los inputs
    const ancho = parseInt(this.widthInput.value) || 3;
    const alto = parseInt(this.heightInput.value) || 3;
    
    // Crear el juego
    this.game = new GameOfLife(ancho, alto);
    
    // Mostrar el tablero
    this.showBoard();
  }

  showBoard() {
    if (!this.game) return;
    
    const board = this.game.getBoard();
    let html = "";
    
    // Crear tabla HTML para mostrar el tablero
    html += `<h3>Tablero ${board[0].length}x${board.length}</h3>`;
    html += "<table>";
    
    for (let fila = 0; fila < board.length; fila++) {
      html += "<tr>";
      for (let columna = 0; columna < board[fila].length; columna++) {
        const valor = board[fila][columna];
        const clase = valor === 1 ? "viva" : "muerta";
        html += `<td class="celula ${clase}">${valor}</td>`;
      }
      html += "</tr>";
    }
    
    html += "</table>";
    this.boardElement.innerHTML = html;
  }
}

// Crear una instancia global
let gamePresenter;

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  gamePresenter = new GameOfLifePresenter();
});
