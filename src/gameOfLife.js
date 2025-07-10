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

  // HISTORIA 3: Contar vecinos (ahora sí necesitamos generalizar)
  countNeighbors(fila, columna) {
    let count = 0;
    
    // Revisar las 8 posiciones vecinas
    for (let df = -1; df <= 1; df++) {
      for (let dc = -1; dc <= 1; dc++) {
        // Saltar la célula central
        if (df === 0 && dc === 0) continue;
        
        // Contar vecino vivo
        count += this.getCell(fila + df, columna + dc);
      }
    }
    
    return count;
  }
}

export default GameOfLife;
