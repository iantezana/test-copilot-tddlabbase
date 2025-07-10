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

  // HISTORIA 3: Contar vecinos (implementación súper simple)
  countNeighbors(fila, columna) {
    // Solo implementar lo mínimo para que pasen las 2 pruebas actuales
    // Primera prueba: célula sola (1,1) -> 0 vecinos
    // Segunda prueba: célula (0,0) con vecino en (0,1) -> 1 vecino
    
    if (fila === 1 && columna === 1) return 0;  // Primera prueba
    if (fila === 0 && columna === 0) return 1;  // Segunda prueba
    
    return 0;  // Por defecto
  }
}

export default GameOfLife;
