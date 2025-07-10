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

  // HISTORIA 3: Contar vecinos
  countNeighbors(fila, columna) {
    let count = 0;
    
    // Revisar las 8 posiciones vecinas (3x3 alrededor de la célula)
    for (let deltaFila = -1; deltaFila <= 1; deltaFila++) {
      for (let deltaColumna = -1; deltaColumna <= 1; deltaColumna++) {
        // Saltar la célula central (la propia célula)
        if (deltaFila === 0 && deltaColumna === 0) continue;
        
        const vecinoFila = fila + deltaFila;
        const vecinoColumna = columna + deltaColumna;
        
        // Si el vecino está vivo, incrementar contador
        if (this.getCell(vecinoFila, vecinoColumna) === 1) {
          count++;
        }
      }
    }
    
    return count;
  }
}

export default GameOfLife;
