// Game of Life - Implementación TDD incremental
// FASE GREEN: Implementación mínima para hacer pasar la primera prueba

class GameOfLife {
  constructor(ancho, alto) {
    // Crear un tablero de 'alto' filas y 'ancho' columnas, lleno de ceros
    this.board = [];
    for (let fila = 0; fila < alto; fila++) {
      this.board[fila] = [];
      for (let columna = 0; columna < ancho; columna++) {
        this.board[fila][columna] = 0;  // Célula muerta
      }
    }
  }

  getBoard() {
    return this.board;
  }

  // HISTORIA 2: Métodos para manipular células individuales
  setCell(fila, columna, valor) {
    // Implementación más simple: solo establece el valor
    this.board[fila][columna] = valor;
  }

  getCell(fila, columna) {
    // Implementación más simple: solo devuelve el valor
    return this.board[fila][columna];
  }
}

export default GameOfLife;
