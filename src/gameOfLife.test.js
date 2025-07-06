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
});
