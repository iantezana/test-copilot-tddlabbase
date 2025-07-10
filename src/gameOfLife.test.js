import GameOfLife from "./gameOfLife.js";

// 🔴 HISTORIA 1: Crear un tablero básico
// Empezamos con UNA SOLA PRUEBA
describe("Historia 1: Crear un tablero básico", () => {
  it("debería crear un tablero vacío de 3x3", () => {
    // Arrange (Preparar)
    const ancho = 3;
    const alto = 3;
    
    // Act (Actuar)
    const game = new GameOfLife(ancho, alto);
    const board = game.getBoard();
    
    // Assert (Verificar)
    expect(board.length).toBe(3);                    // 3 filas
    expect(board[0].length).toBe(3);                 // 3 columnas
    expect(board.every(row => row.every(cell => cell === 0))).toBe(true); // Todas las células muertas (0)
  });

  it("debería crear un tablero de diferentes tamaños", () => {
    // Arrange (Preparar)
    const ancho = 5;
    const alto = 2;
    
    // Act (Actuar)
    const game = new GameOfLife(ancho, alto);
    const board = game.getBoard();
    
    // Assert (Verificar)
    expect(board.length).toBe(2);        // 2 filas (alto)
    expect(board[0].length).toBe(5);     // 5 columnas (ancho)
    expect(board.every(row => row.every(cell => cell === 0))).toBe(true); // Todas muertas
  });
});

// 🔴 HISTORIA 2: Manipular células individuales
// Primera prueba: Poder activar una célula
describe("Historia 2: Manipular células individuales", () => {
  it("debería poder activar una célula", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);
    
    // Act (Actuar)
    game.setCell(1, 1, 1);  // Activar célula en posición (1,1)
    
    // Assert (Verificar)
    expect(game.getCell(1, 1)).toBe(1);  // Debe estar viva (1)
  });

  it("debería manejar coordenadas fuera del tablero", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);  // Tablero 3x3 (coordenadas válidas: 0-2)
    
    // Act & Assert (Actuar y Verificar)
    // Coordenadas fuera del tablero no deben causar error
    expect(() => game.setCell(5, 5, 1)).not.toThrow();
    expect(() => game.setCell(-1, 0, 1)).not.toThrow();
    expect(() => game.setCell(0, -1, 1)).not.toThrow();
    
    // getCell fuera del tablero debería retornar 0 (célula muerta)
    expect(game.getCell(5, 5)).toBe(0);
    expect(game.getCell(-1, 0)).toBe(0);
    expect(game.getCell(0, -1)).toBe(0);
  });

  it("debería poder desactivar una célula", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);
    game.setCell(1, 1, 1);  // Primero activamos una célula
    
    // Act (Actuar)
    game.setCell(1, 1, 0);  // Luego la desactivamos
    
    // Assert (Verificar)
    expect(game.getCell(1, 1)).toBe(0);  // Debe estar muerta (0)
  });
});

// 🔴 HISTORIA 3: Contar vecinos
// Primera prueba: Contar 0 vecinos para una célula sola
describe("Historia 3: Contar vecinos", () => {
  it("debería contar 0 vecinos para una célula sola", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);
    game.setCell(1, 1, 1);  // Solo una célula viva en el centro
    
    // Act (Actuar)
    const vecinos = game.countNeighbors(1, 1);
    
    // Assert (Verificar)
    expect(vecinos).toBe(0);  // No tiene vecinos vivos
  });

  it("debería contar 1 vecino correctamente", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);
    game.setCell(0, 0, 1);  // Célula viva en esquina superior izquierda
    game.setCell(0, 1, 1);  // Su vecino de la derecha
    
    // Act (Actuar)
    const vecinos = game.countNeighbors(0, 0);
    
    // Assert (Verificar)
    expect(vecinos).toBe(1);  // Debe contar 1 vecino vivo
  });

  it("debería contar múltiples vecinos correctamente", () => {
    // Arrange (Preparar)
    const game = new GameOfLife(3, 3);
    game.setCell(1, 1, 1);  // Célula central
    game.setCell(0, 0, 1);  // Vecino diagonal
    game.setCell(0, 1, 1);  // Vecino arriba
    game.setCell(1, 0, 1);  // Vecino izquierda
    
    // Act (Actuar)
    const vecinos = game.countNeighbors(1, 1);
    
    // Assert (Verificar)
    expect(vecinos).toBe(3);  // Debe contar 3 vecinos vivos
  });
});
