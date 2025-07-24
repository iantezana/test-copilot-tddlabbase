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

  // HISTORIA 3: Contar vecinos (un solo nivel de indentación)
  countNeighbors(fila, columna) {
    let vecinosVivos = 0;
    
    for (let deltaFila = -1; deltaFila <= 1; deltaFila++) {
      vecinosVivos += this.contarVecinosEnFila(fila, columna, deltaFila);
    }
    
    return vecinosVivos;
  }

  // Métodos privados para mayor claridad
  contarVecinosEnFila(fila, columna, deltaFila) {
    let vecinosEnFila = 0;
    
    for (let deltaColumna = -1; deltaColumna <= 1; deltaColumna++) {
      if (this.esCelulaCentral(deltaFila, deltaColumna)) continue;
      
      vecinosEnFila += this.obtenerEstadoVecino(fila, deltaFila, columna, deltaColumna);
    }
    
    return vecinosEnFila;
  }

  esCelulaCentral(deltaFila, deltaColumna) {
    return deltaFila === 0 && deltaColumna === 0;
  }

  obtenerEstadoVecino(fila, deltaFila, columna, deltaColumna) {
    const filaVecino = fila + deltaFila;
    const columnaVecino = columna + deltaColumna;
    return this.getCell(filaVecino, columnaVecino);
  }

  // HISTORIA 4: Reglas de supervivencia (implementación mínima)
  nextGeneration() {
    // Por ahora, solo implementar la regla de subpoblación para hacer pasar la prueba
    // Célula (1,1) con 1 vecino debe morir
    if (this.getCell(1, 1) === 1 && this.countNeighbors(1, 1) < 2) {
      this.setCell(1, 1, 0);
    }
  }
}

export default GameOfLife;
