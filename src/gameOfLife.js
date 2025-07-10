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
    // Validar que las coordenadas estén dentro del tablero
    if (fila >= 0 && fila < this.board.length && 
        columna >= 0 && columna < this.board[0].length) {
      this.board[fila][columna] = valor;
    }
    // Si están fuera del tablero, no hacer nada (no lanzar error)
  }

  getCell(fila, columna) {
    // Validar que las coordenadas estén dentro del tablero
    if (fila >= 0 && fila < this.board.length && 
        columna >= 0 && columna < this.board[0].length) {
      return this.board[fila][columna];
    }
    // Si están fuera del tablero, retornar 0 (célula muerta)
    return 0;
  }
}

export default GameOfLife;
